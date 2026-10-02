import { ReactNode } from "react";

export interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

export interface SocialItem {
  name: string;
  url: string;
  icon: ReactNode;
}
