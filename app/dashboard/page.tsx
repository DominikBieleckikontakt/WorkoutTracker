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

const DashboardPage = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserType>();
  const router = useRouter();

  const setEmail = useUserEmailStore((state: any) => state.changeEmail);

  useEffect(() => {
    if (session) {
      getUser(session.user.email!).then((res) => {
        const userData = res.data as UserType;

        setUserData(userData);
        setEmail(userData.email);

        userData.isNewUser && router.push("/onboarding");
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
        <main className="w-full mt-24 mb-24">
          <Cards />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
