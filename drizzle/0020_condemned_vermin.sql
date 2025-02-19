ALTER TABLE "fitnessHistory" DROP CONSTRAINT "fitnessHistory_date_unique";--> statement-breakpoint
ALTER TABLE "dailyFitnessData" ADD CONSTRAINT "dailyFitnessData_userId_unique" UNIQUE("userId");--> statement-breakpoint
ALTER TABLE "fitnessHistory" ADD CONSTRAINT "fitnessHistory_userId_date_unique" UNIQUE("userId","date");