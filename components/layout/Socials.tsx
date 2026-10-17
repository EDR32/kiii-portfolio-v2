"use client";

import Link from "next/link";
import { socialLinks } from "@/constants/socials";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2.5 sm:gap-x-4 text-base sm:text-lg">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-zinc-600 hover:text-black dark:text-white/70 dark:hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
