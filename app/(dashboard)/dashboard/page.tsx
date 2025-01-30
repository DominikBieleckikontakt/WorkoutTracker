import React from "react";
import { getGoogleFitData } from "@/actions/getGoogleFitData";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/getUser";
import { UserType } from "@/types";
import Cards from "@/components/dashboard/cards";

const DashboardPage = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  const user: { message: string; data: UserType } = await getUser(
    session.user.email!
  );

  if (session && user.data.isNewUser === true) {
    redirect("/onboarding");
  }

  let googleFitData;
  googleFitData = session?.user
    ? await getGoogleFitData(session.user.email!)
    : null;
  console.log(googleFitData);

  return <Cards googleFitData={googleFitData} />;
};

export default DashboardPage;
