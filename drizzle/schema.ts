// src/drizzle/schema.ts
import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

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


export const FolksTable = pgTable(
  'folks',
  {
    id: serial('id').primaryKey(), // Unique identifier for each user
    name: text('name').notNull(), // User's name, required
    email: text('email').unique().notNull(), // Unique user email, required
    createdAt: timestamp('createdAt').defaultNow().notNull(), // Auto-populated creation timestamp
  },
);


