import { ReactNode } from "react";
import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page bg-site bg-cover bg-no-repeat text-white font-sora relative min-h-screen flex flex-col justify-between">
      <TopLeftImg />
      <Nav />
      <Header />
      <main className="flex-1 w-full flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
