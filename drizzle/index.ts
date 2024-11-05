import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema'; // Import schema

// Initialize the Drizzle ORM client
export const db = drizzle(sql, { schema });

export interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    createdAt: Date;
}
  
export interface Session {
    id: number;
    sessionToken: string;
    userId: number;
    expires: Date;
    createdAt: Date;
}
