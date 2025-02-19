import React from "react";
import { syncUserData } from "@/lib/server-utils";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/getUser";
import { UserType } from "@/types";
import Cards from "@/components/dashboard/cards";
import { refreshGoogleToken } from "@/actions/refreshGoogleToken";
import db from "@/src/db";

const DashboardPage = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  const user: { message: string; data: UserType } = await getUser(
    session.user.email!
  );

  if (session && user.data.isNewUser === true) {
    redirect("/onboarding");
  }

  let userData;

  if (session) {
    // await syncGoogleFitData(session.user.email!);
    await syncUserData(session.user.email!);
  }

  console.log(userData);

  return <Cards />;
};

export default DashboardPage;
