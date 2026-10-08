import Link from "next/link";
import { socialLinks } from "@/constants/socials";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3.5 sm:gap-x-5 text-base sm:text-lg">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
