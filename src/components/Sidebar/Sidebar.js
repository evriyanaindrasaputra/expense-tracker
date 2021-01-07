import React from "react";
import {
  SidebarWrapper,
  SidebarLogo,
  SidebarMenus,
  SidebarMenu,
} from "./style";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLogo to="/">Expense Tracker</SidebarLogo>
      <SidebarMenus>
        <SidebarMenu to="/">Dashboard</SidebarMenu>
        <SidebarMenu to="/income">Income</SidebarMenu>
        <SidebarMenu to="/expense">Expense</SidebarMenu>
        <SidebarMenu to="/chart">Chart</SidebarMenu>
      </SidebarMenus>
    </SidebarWrapper>
  );
};

export default Sidebar;
