import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {db} from '@/drizzle/index'; 
import { UsersTable,SessionsTable } from '@/drizzle/schema';
import { use } from 'react';
import { eq, lt, gte, ne } from 'drizzle-orm';

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // authorization:"https://accounts.google.com/o/oauth2/auth",
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      console.log('Im in signin')
      if ( account && account.provider === 'google') {
        const existingUser = await db
          .select()
          .from(UsersTable)
          .where(eq(UsersTable.email, user.email || ''))
          .execute();

        if (existingUser.length === 0) {
          const newUser = {
            name: user.name || '',
            email: user.email || '',
            image: user.image || '',

          };
          await db.insert(UsersTable)
           .values(newUser)
        }
      }
      return true;
    },
    async session({  session, user, token }) {
      // Attach the user ID to the session object
      console.log('This is session :: ::::')
      console.log(session)
      const newUser = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email,session.user?.email || ''))
      .execute();
      
      console.log('This is session :: newuser')
      console.log(newUser)
      
      if (newUser.length > 0) {
        session.user.id=newUser[0].id
      }

      const sessionToken = token.sessionToken as string; 
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); 

      await db.insert(SessionsTable).values({
        sessionToken,
        userId: session.user?.id, 
        expires,
      });
      console.log('session isnerted')
      return session;
    },
    async jwt({ token, user }) {
      console.log('jwt called')
      console.log(user)
      if (user) {
        token.id = user.id;
        token.sessionToken = `${user.email}-${Date.now()}`; // Example session token
      }
      console.log(token)
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect called')
      url="http://localhost:3000/"
      return url;
    },
  },
  events: {
    async signOut({ token }) {
      await db.delete(SessionsTable).where(eq(SessionsTable.sessionToken,token.sessionToken))

    },
  },
  session: {
    strategy: "jwt",
  },
  
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
