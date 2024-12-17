// src/app/api/auth/[...nextauth]/route.ts


import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { db } from '@/drizzle/index';
import { UsersTable, SessionsTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

// Define NextAuth options
const authOptions: NextAuthOptions = {
  // Secret for encrypting tokens
  secret: process.env.NEXTAUTH_SECRET,

  // Define authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // Ensure this is set in your .env file
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Ensure this is set in your .env file
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!, // Ensure this is set in your .env file
      clientSecret: process.env.GITHUB_CLIENT_SECRET!, // Ensure this is set in your .env file
    }),
  ],

  // Session strategy set to JWT
  session: {
    strategy: 'jwt',
  },

  // Callbacks to handle various authentication events
  callbacks: {
    /**
     * Sign-in callback
     * Checks if the user exists in the database; if not, creates a new user.
     */
    async signIn({ user, account }) {
      console.log('Sign In Callback Triggered');

      // Only process Google provider sign-ins
      if (account && account.provider === 'google' || account?.provider === 'github') {
        try {
          // Check if the user already exists in the UsersTable
          const existingUser = await db
            .select()
            .from(UsersTable)
            .where(eq(UsersTable.email, user.email || ''))
            .execute();

          // If user does not exist, create a new user
          if (existingUser.length === 0) {
            const newUser = {
              name: user.name || '',
              email: user.email || '',
              image: user.image || '',
            };

            await db.insert(UsersTable).values(newUser);
            console.log('New user created:', newUser);
          } else {
            console.log('User already exists:', existingUser[0]);
          }

          return true; // Allow sign-in
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false; // Deny sign-in on error
        }
      }

      return true; // Allow sign-in for other providers if any
    },

    /**
     * Session callback
     * Attaches the user ID to the session and manages session tokens.
     */
    async session({ session, token }) {
      console.log('Session Callback Triggered');

      try {
        // Fetch user from the database based on email
        const users = await db
          .select()
          .from(UsersTable)
          .where(eq(UsersTable.email, session.user?.email || ''))
          .execute();

        if (users.length > 0) {
          // Attach user ID to the session object
          session.user.id = users[0].id;
          console.log('User ID attached to session:', users[0].id);
        }

        // Manage session tokens
        const sessionToken = token.sessionToken as string;
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

        await db.insert(SessionsTable).values({
          sessionToken,
          userId: session.user?.id,
          expires,
        });

        // console.log('Session inserted:', { sessionToken, userId: session.user?.id, expires });
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session; // Return session even if there's an error
      }
    },

    /**
     * JWT callback
     * Adds user ID and session token to the JWT.
     */
    async jwt({ token, user }) {
      console.log('JWT Callback Triggered');

      if (user) {
        token.id = user.id;
        token.sessionToken = `${user.email}-${Date.now()}`; // Example session token
        console.log('Token updated with user ID and session token:', token);
      }

      return token;
    },

    /**
     * Redirect callback
     * Handles redirection after sign-in/sign-out.
     */
    async redirect({ url }) {
      console.log('Redirect Callback Triggered');
      return 'http://localhost:3000/'; // Redirect to homepage
    },
  },

  // Event handlers for sign-out
  events: {
    /**
     * Sign-out event
     * Deletes the session from the SessionsTable upon sign-out.
     */
    async signOut({ token }) {
      console.log('Sign Out Event Triggered');

      try {
        await db.delete(SessionsTable).where(eq(SessionsTable.sessionToken, token.sessionToken));
        console.log('Session deleted on sign out.');
      } catch (error) {
        console.error('Error deleting session on sign out:', error);
      }
    },
  },
};

// Initialize NextAuth with the defined options
const handler = NextAuth(authOptions);

// Export GET and POST handlers for Next.js API routes
export { handler as GET, handler as POST };