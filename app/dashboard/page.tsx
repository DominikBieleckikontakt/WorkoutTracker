"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import useUserEmailStore from "@/lib/store/useUserEmailStore";
import { getUser } from "@/actions/getUser";
import { UserType } from "@/types";

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
    // console.log(session);
    // if (!session) {
    //   router.push("/authentication/login");
    // }
  }, [session]);

  return <div>Hello</div>;
};

export default DashboardPage;
