import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/socials/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-16 xl:px-0 h-16 md:h-20 xl:h-24">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={215}
              height={38}
              alt="Logo"
              priority
              className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto object-contain"
            />
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
