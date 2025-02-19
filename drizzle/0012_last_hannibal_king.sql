CREATE TABLE IF NOT EXISTS "userLayouts" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"cardOrder" jsonb NOT NULL,
	CONSTRAINT "userLayouts_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
DROP TABLE "user_layouts" CASCADE;