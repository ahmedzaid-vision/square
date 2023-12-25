import Header from "./header";
import Footer from "./footer";
import Banner from "./banner";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Banner />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;


