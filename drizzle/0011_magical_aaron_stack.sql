CREATE TABLE IF NOT EXISTS "user_layouts" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"layout" jsonb NOT NULL,
	CONSTRAINT "user_layouts_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
DROP TABLE "userWidgets" CASCADE;