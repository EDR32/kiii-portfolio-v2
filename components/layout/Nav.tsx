"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navData } from "@/constants/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                isActive ? "text-accent" : "text-white/60"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              aria-label={link.name}
            >
              {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* Triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                </div>
              </div>

              {/* Icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
