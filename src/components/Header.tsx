
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 relative">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="text-white font-bold text-xl hover:text-white/80 transition-colors flex items-center space-x-2"
              onClick={closeMobileMenu}
            >
              <Shield className="h-6 w-6" />
              <span>CyberGuard</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-white hover:text-white/80 transition-colors">
              Produk
            </Link>
            <Link to="/solutions" className="text-white hover:text-white/80 transition-colors">
              Solusi
            </Link>
            <Link to="/support" className="text-white hover:text-white/80 transition-colors">
              Support
            </Link>
            <Link to="/about" className="text-white hover:text-white/80 transition-colors">
              Tentang Kami
            </Link>
            <Link to="/contact" className="text-white hover:text-white/80 transition-colors">
              Kontak
            </Link>
            <Link to="/blog" className="text-white hover:text-white/80 transition-colors">
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
            className="md:hidden text-white hover:text-white/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-white/20 z-50">
            <nav className="flex flex-col space-y-4 px-4 py-6">
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
