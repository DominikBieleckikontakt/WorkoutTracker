CREATE TABLE IF NOT EXISTS "userData" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"weight" serial NOT NULL,
	"height" serial NOT NULL,
	"age" integer NOT NULL,
	"gender" text NOT NULL,
	"goal" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userData" ADD CONSTRAINT "userData_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
