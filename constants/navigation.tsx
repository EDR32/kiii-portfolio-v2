import React from "react";
import { Home, User, LayoutGrid, Mail } from "lucide-react";
import { NavItem } from "@/types";

export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <Home size={22} /> },
  { name: "about", path: "/about", icon: <User size={22} /> },
  { name: "services", path: "/services", icon: <LayoutGrid size={22} /> },
  // { name: "work", path: "/work", icon: <Briefcase size={22} /> },
  {
    name: "contact",
    path: "/contact",
    icon: <Mail size={22} />,
  },
];
