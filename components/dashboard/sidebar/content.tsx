import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Calendar, User } from "lucide-react";

const SidebarMyContent = () => {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-3">
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Home className="!size-5.5 -ml-[3px]" />
            <span>Home</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <User className="!size-5.5 -ml-[3px]" />
            <span>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Calendar className="!size-5.5 -ml-[3px]" />
            <span>Calendar</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarMyContent;
