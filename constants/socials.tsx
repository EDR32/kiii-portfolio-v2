import React from "react";
import { RiGithubLine, RiLinkedinLine, RiInstagramLine, RiMailLine } from "react-icons/ri";
import { SocialItem } from "@/types";
import { github, email, linkedin, instagram } from "@/constants/env";

export const socialLinks: SocialItem[] = [
  {
    name: "GitHub",
    url: github || "https://github.com/EDR32",
    icon: <RiGithubLine size={20} />,
  },
  {
    name: "LinkedIn",
    url: linkedin || "https://www.linkedin.com/in/eki-dama-rukmana-169280388/",
    icon: <RiLinkedinLine size={20} />,
  },
  {
    name: "Instagram",
    url: instagram || "https://www.instagram.com/kiii.dama/",
    icon: <RiInstagramLine size={20} />,
  },
  {
    name: "Email",
    url:
      email ||
      "https://mail.google.com/mail/?view=cm&fs=1&to=ekidama91@gmail.com&su=Hire%20Me&body=Halo,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20anda.",
    icon: <RiMailLine size={20} />,
  },
];
