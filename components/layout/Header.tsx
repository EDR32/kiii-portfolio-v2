import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/socials/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-6 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 md:gap-y-6 py-6 md:py-8">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={220}
              height={48}
              alt="Logo"
              priority
              className="w-auto h-8 md:h-10"
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
