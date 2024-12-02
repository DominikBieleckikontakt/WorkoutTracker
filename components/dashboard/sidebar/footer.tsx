"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut, Moon, Sun } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

const SidebarMyFooter = () => {
  const { setTheme, theme } = useTheme();

  return (
    <SidebarMenu className="space-y-3">
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          <Sun className="!size-5.5 -ml-[3px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute -ml-[3px] !size-5.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="text-base">Toggle theme</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground text-base"
          onClick={async () =>
            await signOut({
              redirect: true,
              callbackUrl: "/authentication/login",
            })
          }
        >
          <LogOut className="!size-5.5 -ml-[3px]" />
          <span>Log out</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarMyFooter;
