CREATE TABLE IF NOT EXISTS "folks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "folks_email_unique" UNIQUE("email")
);
