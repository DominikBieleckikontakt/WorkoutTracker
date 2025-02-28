import React from "react";
import { getTodayFitnessData, syncUserData } from "@/lib/server-utils";
import { getServerSession, Session } from "next-auth";
import db from "@/src/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";
import { getUser } from "@/actions/getUser";
import { TodayGoogleFitData, UserType } from "@/types";
import Cards from "@/components/dashboard/cards";

const DashboardPage = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  let todayFitnessUserData: TodayGoogleFitData | undefined;
  let userData;

  const user: { message: string; data: UserType } = await getUser(
    session.user.email!
  );

  if (session && user.data.isNewUser === true) {
    redirect("/onboarding");
  }

  if (session) {
    await syncUserData(session.user.email!);
    todayFitnessUserData = await getTodayFitnessData(session.user.email!);
    userData = await db.query.userData.findFirst({
      where: (userData, { eq }) =>
        eq(userData.userId, todayFitnessUserData!.userId),
    });
  }

  const { height, weight } = userData!;

  return (
    <Cards
      googleFitData={todayFitnessUserData!}
      height={height}
      weight={weight}
    />
  );
};

export default DashboardPage;
