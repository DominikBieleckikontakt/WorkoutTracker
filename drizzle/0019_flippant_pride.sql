ALTER TABLE "dailyFitnessData" ALTER COLUMN "date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "fitnessHistory" ADD CONSTRAINT "fitnessHistory_date_unique" UNIQUE("date");