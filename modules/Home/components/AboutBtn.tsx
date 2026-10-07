"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AboutBtn = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (el: Element, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", "#about");
    }
  };

  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="#about"
        onClick={handleClick}
        className="relative w-46.25 h-46.25 flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
        aria-label="View About"
      >
        <Image
          src="/about-me.png"
          width={141}
          height={148}
          alt="About Me"
          className="animate-spin-slow w-full h-full max-w-35.25 max-h-35.25"
          style={{ width: "auto", height: "auto" }}
        />
        <ArrowRight className="absolute text-4xl w-9 h-9 group-hover:translate-x-2 transition-all duration-300 text-white" />
      </a>
    </div>
  );
};

export default AboutBtn;
