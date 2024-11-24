import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "../../ui/sidebar";

import SidebarMyFooter from "./footer";
import SidebarMyHeader from "./header";
import SidebarMyContent from "./content";

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="text-2xl font-semibold">
        <SidebarMyHeader isOpen={open} />
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-center">
        <SidebarMyContent />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMyFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
