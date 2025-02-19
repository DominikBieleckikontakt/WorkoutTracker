ALTER TABLE "fitnessHistory" ALTER COLUMN "lastTraining" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "fitnessHistory" ADD COLUMN "date" date;--> statement-breakpoint
ALTER TABLE "fitnessHistory" DROP COLUMN IF EXISTS "recordedAt";