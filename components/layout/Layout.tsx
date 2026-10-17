import { ReactNode } from "react";
import TopLeftImg from "./TopLeftImg";
import NavFloatingDock from "./NavFloatingDock";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page text-foreground font-seed relative min-h-screen flex flex-col justify-between selection:bg-accent selection:text-black">
      {/* Ambient background with white atmospheric gradient */}
      <div
        className="fixed inset-0 -z-10 bg-[#F7F8FA] dark:bg-black transition-colors duration-300 pointer-events-none transform-gpu"
        aria-hidden="true"
      >
        {/* In dark mode: white radial atmospheric spotlights */}
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_45%,transparent_75%)]" />
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_75%_45%_at_50%_50%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_40%,transparent_70%)]" />
      </div>

      <TopLeftImg />
      <Header />
      <NavFloatingDock />
      <main className="flex-1 w-full flex flex-col pt-16 md:pt-18">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
