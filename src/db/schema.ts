import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  jsonb,
  date,
  unique,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: text("password"),
  image: text("image"),
  subscriptionLevel: text("subscriptionLevel").notNull().default("Basic"),
  isNewUser: boolean("isNewUser").notNull().default(true),
  googleAccessToken: text("googleAccessToken"),
  googleRefreshToken: text("googleRefreshToken"),
});

export const userLayouts = pgTable("userLayouts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId").notNull().unique(),
  cardOrder: jsonb("cardOrder").notNull(),
});

export const userData = pgTable("userData", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  weight: serial("weight").notNull(),
  height: serial("height").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  activityLevel: text("activityLevel").notNull(),
  goal: text("goal").notNull(),
  stepsGoal: integer("stepsGoal").notNull(),
});

export const dailyFitnessData = pgTable("dailyFitnessData", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  steps: integer("steps"),
  stepsGoal: integer("stepsGoal").default(10000),
  sleep: integer("sleep"),
  burnedCalories: integer("burnedCalories"),
  burnCaloriesGoal: integer("burnCaloriesGoal"),
  timeInSport: integer("timeInSport"),
  lastTraining: text("lastTraining"),
  carbs: integer("carbs"),
  carbsGoal: integer("carbsGoal"),
  fat: integer("fat"),
  fatGoal: integer("fatGoal"),
  proteins: integer("proteins"),
  proteinsGoal: integer("proteinsGoal"),
  calories: integer("calories"),
  caloriesGoal: integer("caloriesGoal"),
  drinkedWater: integer("drinkedWater"),
  heartRate: integer("heartRate").array(),
  date: date("date"),
});

export const fitnessHistory = pgTable(
  "fitnessHistory",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    steps: integer("steps"),
    stepsGoal: integer("stepsGoal"),
    sleep: integer("sleep"),
    burnedCalories: integer("burnedCalories"),
    burnCaloriesGoal: integer("burnCaloriesGoal"),
    timeInSport: integer("timeInSport"),
    lastTraining: text("lastTraining"),
    carbs: integer("carbs"),
    carbsGoal: integer("carbsGoal"),
    fat: integer("fat"),
    fatGoal: integer("fatGoal"),
    proteins: integer("proteins"),
    proteinsGoal: integer("proteinsGoal"),
    calories: integer("calories"),
    caloriesGoal: integer("caloriesGoal"),
    drinkedWater: integer("drinkedWater"),
    heartRate: integer("heartRate").array(),
    date: date("date"),
  },
  (fitnessHistory) => ({
    uniqueUserDate: unique().on(fitnessHistory.userId, fitnessHistory.date),
  })
);

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  })
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  })
);
