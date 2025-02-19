CREATE TABLE IF NOT EXISTS "dailyFitnessData" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"steps" integer,
	"stepsGoal" integer DEFAULT 10000,
	"sleep" integer,
	"burnedCalories" integer,
	"burnCaloriesGoal" integer,
	"timeInSport" integer,
	"lastTraining" integer,
	"carbs" integer,
	"carbsGoal" integer,
	"fat" integer,
	"fatGoal" integer,
	"proteins" integer,
	"proteinsGoal" integer,
	"calories" integer,
	"caloriesGoal" integer,
	"drinkedWater" integer,
	"heartRate" integer[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fitnessHistory" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"steps" integer,
	"stepsGoal" integer,
	"sleep" integer,
	"burnedCalories" integer,
	"burnCaloriesGoal" integer,
	"timeInSport" integer,
	"lastTraining" integer,
	"carbs" integer,
	"carbsGoal" integer,
	"fat" integer,
	"fatGoal" integer,
	"proteins" integer,
	"proteinsGoal" integer,
	"calories" integer,
	"caloriesGoal" integer,
	"drinkedWater" integer,
	"heartRate" integer[],
	"recordedAt" date DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dailyFitnessData" ADD CONSTRAINT "dailyFitnessData_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fitnessHistory" ADD CONSTRAINT "fitnessHistory_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
