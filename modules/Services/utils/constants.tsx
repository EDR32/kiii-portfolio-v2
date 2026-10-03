import React from "react";
import { Code2, Globe, Layers, Zap, Monitor } from "lucide-react";
import { ServiceItem } from "../@types/type";

export const serviceData: ServiceItem[] = [
  {
    icon: <Code2 size={36} />,
    title: "Frontend Development",
    description:
      "Membangun antarmuka web modern dengan React, Next.js, dan TypeScript yang cepat, terstruktur, dan ramah pengguna.",
  },
  {
    icon: <Globe size={36} />,
    title: "E-Government & Systems",
    description:
      "Merancang dan mengimplementasikan portal layanan publik digital seperti dashboard monitoring CCTV real-time kota.",
  },
  {
    icon: <Layers size={36} />,
    title: "UI/UX & Tailwind CSS",
    description:
      "Implementasi desain responsif pixel-perfect dengan Tailwind CSS, transisi halus, dan arsitektur komponen modular.",
  },
  {
    icon: <Zap size={36} />,
    title: "API Integration & Backend",
    description:
      "Integrasi seamless RESTful APIs, pengelolaan state reaktif, serta pemahaman backend dengan PHP dan Laravel.",
  },
  {
    icon: <Monitor size={36} />,
    title: "Network & Infrastructure",
    description:
      "Konfigurasi router, switch, access point, rancang topologi jaringan lokal, dan pemeliharaan hardware/software.",
  },
];
