import { ReactNode } from "react";

export interface AboutInfoItem {
  title: string;
  subtitle?: string;
  stage?: string;
  description?: string;
  icons?: ReactNode[];
}

export interface AboutCategory {
  title: string;
  info: AboutInfoItem[];
}
