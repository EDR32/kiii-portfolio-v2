"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" className="inline-block cursor-pointer transition-transform hover:opacity-90">
              <Image
                src="/logo.svg"
                width={140}
                height={28}
                alt="Eki Dama Rukmana"
                className="w-28 sm:w-32 h-auto object-contain transition-all duration-300 dark:brightness-100 brightness-0"
              />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-white/60 max-w-sm">
              Frontend Developer specializing in modern web interfaces, React, Next.js and TypeScript.
            </p>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3 sm:gap-3.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                    bg-linear-to-b from-[#f4f4f7] to-[#e3e4ea] border border-black/10 text-zinc-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_3px_8px_rgba(0,0,0,0.08)]
                    dark:bg-linear-to-b dark:from-[#2a2a2f] dark:to-[#131316] dark:border-white/15 dark:text-zinc-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.4)]
                    hover:border-accent dark:hover:border-accent hover:shadow-[0_0_16px_rgba(255,221,51,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:scale-108 active:scale-95"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="transition-all duration-300 group-hover:text-black dark:group-hover:text-accent group-hover:scale-110 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 dark:text-white/40">
              Connect with me on LinkedIn, GitHub, Instagram, or Email
            </span>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-zinc-500 dark:text-white/50">
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
