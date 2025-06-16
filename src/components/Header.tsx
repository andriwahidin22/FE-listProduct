import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Home } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  isHomePage?: boolean;
}

const Header = ({ isHomePage = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styles
  const textColor = isHomePage && !scrolled ? "text-white" : "text-gray-800";
  const hoverColor = isHomePage && !scrolled ? "hover:text-white/80" : "hover:text-blue-600";
  const logoHoverColor = isHomePage && !scrolled ? "hover:text-white/80" : "hover:text-blue-600";
  const mobileMenuBg = isHomePage ? "bg-white/95" : "bg-white";

  const headerBg = isHomePage
    ? scrolled
      ? "bg-white shadow-md border-b border-gray-200"
      : "bg-white/10 backdrop-blur-sm border-white/20"
    : "bg-white border-gray-200 shadow-sm";

  return (
    <header className={`${headerBg} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className={`${textColor} font-bold text-xl ${logoHoverColor} transition-colors flex items-center space-x-2`}
              onClick={closeMobileMenu}
            >
              <Shield className="h-6 w-6" />
              <span>CyberGuard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${textColor} ${hoverColor} transition-colors flex items-center space-x-1`}>
              <span>Home</span>
            </Link>
            <Link to="/products" className={`${textColor} ${hoverColor} transition-colors`}>
              Produk
            </Link>
            <Link to="/solutions" className={`${textColor} ${hoverColor} transition-colors`}>
              Solusi
            </Link>
            <Link to="/support" className={`${textColor} ${hoverColor} transition-colors`}>
              Support
            </Link>
            <Link to="/about" className={`${textColor} ${hoverColor} transition-colors`}>
              Tentang Kami
            </Link>
            <Link to="/contact" className={`${textColor} ${hoverColor} transition-colors`}>
              Kontak
            </Link>
            <Link to="/blog" className={`${textColor} ${hoverColor} transition-colors`}>
              Blog
            </Link>
          </nav>

          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <Link to="/download">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                Download Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden ${textColor} ${hoverColor} transition-colors`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 ${mobileMenuBg} backdrop-blur-sm border-b border-gray-200 z-50`}>
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/products" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Produk
              </Link>
              <Link 
                to="/solutions" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Solusi
              </Link>
              <Link 
                to="/support" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Kontak
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link to="/download" onClick={closeMobileMenu}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full">
                  Download Gratis
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
