"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  User,
  LayoutGrid,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <User className="h-full w-full" />,
    href: "#about",
  },
  {
    title: "Services",
    icon: <LayoutGrid className="h-full w-full" />,
    href: "#services",
  },
  {
    title: "Work",
    icon: <Briefcase className="h-full w-full" />,
    href: "#work",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export default function NavFloatingDock() {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "work", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Quick navigation" className="fixed bottom-6 z-50 flex items-center justify-center md:left-1/2 md:-translate-x-1/2 right-6 md:right-auto pointer-events-auto">
      <FloatingDock items={navItems} activeHref={activeHref} />
    </nav>
  );
}
