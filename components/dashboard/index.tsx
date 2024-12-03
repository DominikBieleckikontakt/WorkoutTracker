"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import useUserEmailStore from "@/lib/store/useUserEmailStore";
import { getUser } from "@/actions/getUser";
import { UserType } from "@/types";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Cards from "@/components/dashboard/cards";

const MainDashboard = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserType>();
  const router = useRouter();

  const setEmail = useUserEmailStore((state: any) => state.changeEmail);
  useEffect(() => {
    if (session) {
      console.log(session);
      getUser(session.user.email!).then((res) => {
        const userDataFromDB = res.data as UserType;

        setUserData(userDataFromDB);
        setEmail(userDataFromDB.email);

        console.log(userDataFromDB);

        userDataFromDB.isNewUser && router.push("/onboarding");
      });
    }
  }, [session]);

  return (
    <SidebarProvider defaultOpen={false}>
      <DashboardSidebar />
      <SidebarInset>
        <header className="bg-sidebar text-sidebar-foreground border-b border-sidebar-border -ml-10 py-3">
          <SidebarTrigger className="ml-16" />
        </header>
        <main className="w-full my-16 md:my-24">
          <Cards />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainDashboard;
