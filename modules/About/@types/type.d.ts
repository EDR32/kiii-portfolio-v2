import { ReactNode } from "react";

export interface AboutInfoItem {
  title: string;
  stage?: string;
  icons?: ReactNode[];
}

export interface AboutCategory {
  title: string;
  info: AboutInfoItem[];
}
