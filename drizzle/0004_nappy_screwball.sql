CREATE TABLE IF NOT EXISTS "widgets" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"column_id" text NOT NULL,
	"card_id" text NOT NULL,
	"position" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "userWidget" CASCADE;