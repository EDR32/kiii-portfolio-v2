"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { dockNavItems } from "@/constants/navigation";

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
      <FloatingDock items={dockNavItems} activeHref={activeHref} />
    </nav>
  );
}
