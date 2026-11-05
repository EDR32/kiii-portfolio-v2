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

export type TimelineIconType = "work" | "education" | "award";

export interface TimelineCardItem {
  iconType: TimelineIconType;
  title: string;
  period: string;
  organization?: string;
  location?: string;
  highlight?: string;
  highlightVariant?: "emerald" | "accent";
  description: string;
  skills?: string[];
}

export interface TimelineGroup {
  year: string;
  items: TimelineCardItem[];
}

export interface CounterItem {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}
