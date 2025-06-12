
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  showHero?: boolean;
}

const Layout = ({ children, showHero = false }: LayoutProps) => {
  return (
    <div className={`min-h-screen ${showHero ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600' : 'bg-gray-50'}`}>
      <Header isHomePage={showHero} />
      {children}
    </div>
  );
};

export default Layout;
