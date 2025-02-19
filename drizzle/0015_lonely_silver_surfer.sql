ALTER TABLE "dailyFitnessData" ALTER COLUMN "lastTraining" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "dailyFitnessData" ADD COLUMN "date" date DEFAULT now();--> statement-breakpoint
ALTER TABLE "userData" ADD COLUMN "stepsGoal" integer NOT NULL;