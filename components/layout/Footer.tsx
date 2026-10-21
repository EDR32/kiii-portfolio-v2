"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { socialLinks } from "@/constants/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#0a0a0c]/80 backdrop-blur-md transition-colors duration-300 pt-10 pb-28 md:pb-24 overflow-hidden z-20">
      {/* Top subtle glowing line in dark mode */}
      <div className="hidden dark:block absolute top-0 inset-x-8 h-px bg-linear-to-r from-transparent via-white/50 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.5)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Link
              href="/"
              className="inline-block cursor-pointer transition-transform hover:opacity-90"
            >
              <Image
                src="/logo.svg"
                width={140}
                height={28}
                alt="Eki Dama Rukmana"
                className="w-28 sm:w-32 h-auto object-contain transition-all duration-300 dark:brightness-100 brightness-0"
              />
            </Link>
            <p className="text-sm sm:text-sm text-zinc-500 dark:text-white/60 max-w-sm">
              Frontend Developer specializing in modern web interfaces, React, Next.js and
              TypeScript.
            </p>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <AnimatedTooltip
              items={socialLinks.map((social, index) => ({
                id: index,
                name: social.name,
                designation: social.designation,
                icon: social.icon,
                url: social.url,
              }))}
              className="gap-3 sm:gap-3.5"
            />
            <span className="text-sm sm:text-sm text-zinc-400 dark:text-white/40">
              Connect with me on LinkedIn, GitHub, Instagram or Email
            </span>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-sm text-zinc-500 dark:text-white/50">
          <p>© {currentYear} Eki Dama Rukmana. All rights reserved.</p>
          <p className="text-zinc-400 dark:text-white/35">
            Designed &amp; Built with precision using Next.js, React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
