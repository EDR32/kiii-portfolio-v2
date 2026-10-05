import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/about"
        className="relative w-46.25 h-46.25 flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
        aria-label="View About"
      >
        <Image
          src="/about-me.png"
          width={141}
          height={148}
          alt="About Me"
          className="animate-spin-slow w-full h-full max-w-35.25 max-h-35.25"
        />
        <ArrowRight className="absolute text-4xl w-9 h-9 group-hover:translate-x-2 transition-all duration-300 text-white" />
      </Link>
    </div>
  );
};

export default AboutBtn;
