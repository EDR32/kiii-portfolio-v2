import React from "react";
import { Home, User, LayoutGrid, Briefcase, Mail } from "lucide-react";
import { NavItem } from "@/types";

export interface DockNavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const dockNavItems: DockNavItem[] = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <User className="h-full w-full" />,
    href: "#about",
  },
  {
    title: "Services",
    icon: <LayoutGrid className="h-full w-full" />,
    href: "#services",
  },
  {
    title: "Work",
    icon: <Briefcase className="h-full w-full" />,
    href: "#work",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <Home size={22} /> },
  { name: "about", path: "/about", icon: <User size={22} /> },
  { name: "services", path: "/services", icon: <LayoutGrid size={22} /> },
  {
    name: "contact",
    path: "/contact",
    icon: <Mail size={22} />,
  },
];
