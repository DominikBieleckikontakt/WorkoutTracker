"use client";
import React from "react";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return <div>Hello</div>;
};

export default DashboardPage;
