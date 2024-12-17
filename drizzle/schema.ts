// src/drizzle/schema.ts
import { pgTable, serial, text, timestamp, uniqueIndex,integer } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);

export const SessionsTable = pgTable(
  'sessions',
  {
    id: serial('id').primaryKey(),
    sessionToken: text('sessionToken').notNull(),
    userId: serial('userId').notNull(),
    expires: timestamp('expires').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
);


export const UserDetailsTable = pgTable(
  'user_details',
  {
    id: serial('id').primaryKey(), // Unique identifier for each user
    fullName: text('full_name').notNull(), // Full name of the user
    email: text('email').unique().notNull(), // Unique user email
    phone: text('phone'), // Optional phone number
    createdAt: timestamp('created_at').defaultNow().notNull(), // When the user registered
  },
);

export const UserCredentialsTable = pgTable(
  'user_credentials',
  {
    id: serial('id').primaryKey(), // Unique identifier for each record
    username: text('username').unique().notNull(), // Unique username for login
    password: text('password').notNull(), // Hashed password
    userId: integer('user_id').references(() => UserDetailsTable.id).notNull(), // FK referencing UserDetails
    createdAt: timestamp('created_at').defaultNow().notNull(), // When the user registered
  },
);



