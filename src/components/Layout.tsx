
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  showHero?: boolean;
}

const Layout = ({ children, showHero = false }: LayoutProps) => {
  return (
    <div className={`min-h-screen ${showHero ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600' : 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'}`}>
      <Header isHomePage={showHero} />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
