import React from "react";
import { GitBranch, Mail, Share2, Camera } from "lucide-react";
import { SocialItem } from "@/types";

export const socialLinks: SocialItem[] = [
  { name: "GitHub", url: "https://github.com/EDR32", icon: <GitBranch size={20} /> },
  { name: "Email", url: "mailto:ekidama91@gmail.com", icon: <Mail size={20} /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eki-dama-rukmana-169280388/",
    icon: <Share2 size={20} />,
  },
  { name: "Instagram", url: "https://www.instagram.com/kiii.dama/", icon: <Camera size={20} /> },
];
