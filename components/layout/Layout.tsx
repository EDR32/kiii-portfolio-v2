import { ReactNode } from "react";
import TopLeftImg from "./TopLeftImg";
import NavFloatingDock from "./NavFloatingDock";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page text-white font-sora relative min-h-screen flex flex-col justify-between">
      {/* GPU-accelerated fixed background (eliminates scroll repaints) */}
      <div
        className="fixed inset-0 -z-10 bg-site bg-cover bg-center bg-no-repeat pointer-events-none transform-gpu"
        aria-hidden="true"
      />
      <TopLeftImg />
      <NavFloatingDock />
      <Header />
      <main className="flex-1 w-full flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
