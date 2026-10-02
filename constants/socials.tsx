import React from "react";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";
import { SocialItem } from "@/types";

export const socialLinks: SocialItem[] = [
  { name: "YouTube", url: "https://youtube.com", icon: <RiYoutubeLine /> },
  { name: "Instagram", url: "https://instagram.com", icon: <RiInstagramLine /> },
  { name: "Facebook", url: "https://facebook.com", icon: <RiFacebookLine /> },
  { name: "Dribbble", url: "https://dribbble.com", icon: <RiDribbbleLine /> },
  { name: "Behance", url: "https://behance.net", icon: <RiBehanceLine /> },
  { name: "Pinterest", url: "https://pinterest.com", icon: <RiPinterestLine /> },
  { name: "GitHub", url: "https://github.com", icon: <RiGithubLine /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <RiLinkedinLine /> },
];
