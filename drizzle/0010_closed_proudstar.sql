CREATE TABLE IF NOT EXISTS "userWidgets" (
	"userId" text PRIMARY KEY NOT NULL,
	"layout" jsonb
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userWidgets" ADD CONSTRAINT "userWidgets_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
