import { ReactNode } from "react";
import TopLeftImg from "./TopLeftImg";
import NavFloatingDock from "./NavFloatingDock";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page bg-site bg-cover bg-center bg-no-repeat bg-fixed text-white font-sora relative min-h-screen flex flex-col justify-between">
      <TopLeftImg />
      <NavFloatingDock />
      <Header />
      <main className="flex-1 w-full flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
