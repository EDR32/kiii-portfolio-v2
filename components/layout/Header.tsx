"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/layout/Socials";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-300 bg-[#F7F8FA]/85 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 h-16 md:h-18">
      <div className="container mx-auto h-full px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 cursor-pointer transition-transform hover:opacity-95"
          >
            <div className="relative">
              <Image
                src="/logo.svg"
                width={160}
                height={32}
                alt="Eki Dama Rukmana"
                priority
                className="w-24 sm:w-32 md:w-36 h-auto object-contain transition-all duration-300 dark:brightness-100 brightness-0"
              />
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-bold tracking-wider uppercase bg-accent text-black shadow-xs">
              PORTFOLIO
            </span>
          </Link>
        </div>

        {/* Right: Socials + Theme Toggle + CTA Button */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          {/* Social Links */}
          <div className="hidden xs:flex items-center">
            <Socials />
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-black/10 dark:bg-white/15 mx-0.5 sm:mx-1" />

          {/* Theme Switcher with Top-Right to Bottom-Left Reveal */}
          <div className="relative flex items-center">
            <ThemeToggle />
          </div>

          {/* Download CV */}
          <a
            href="/CV_ATS_PUBLIC_EKI DAMA RUKMANA - Copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-sm bg-accent text-black hover:bg-accent-hover transition-all duration-300 shadow-[0_0_15px_rgba(255,221,51,0.25)] hover:shadow-[0_0_20px_rgba(255,221,51,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            title="Download Curriculum Vitae"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            <span className="font-bold">CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
