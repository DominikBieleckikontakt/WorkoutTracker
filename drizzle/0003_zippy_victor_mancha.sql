CREATE TABLE IF NOT EXISTS "userWidget" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"layout" text NOT NULL,
	CONSTRAINT "userWidget_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userWidget" ADD CONSTRAINT "userWidget_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
