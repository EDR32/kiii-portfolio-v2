import React from "react";
import { GitBranch, Mail, Share2, Camera } from "lucide-react";
import { SocialItem } from "@/types";
import { github, email, linkedin, instagram } from "@/constants/env";

export const socialLinks: SocialItem[] = [
  { name: "GitHub", url: github || "#", icon: <GitBranch size={20} /> },
  {
    name: "Email",
    url: email || "",
    icon: <Mail size={20} />,
  },
  {
    name: "LinkedIn",
    url: linkedin || "",
    icon: <Share2 size={20} />,
  },
  { name: "Instagram", url: instagram || "", icon: <Camera size={20} /> },
];
