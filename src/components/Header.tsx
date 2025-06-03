
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
              className="text-white font-bold text-xl hover:text-white/80 transition-colors"
              onClick={closeMobileMenu}
            >
              prakerja
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/publikasi" className="text-white hover:text-white/80 transition-colors">
              Publikasi
            </Link>
            <Link to="/lembaga-pelatihan" className="text-white hover:text-white/80 transition-colors">
              Lembaga Pelatihan
            </Link>
            <Link to="/tips-bekerja" className="text-white hover:text-white/80 transition-colors">
              Tips Bekerja
            </Link>
            <Link to="/artikel" className="text-white hover:text-white/80 transition-colors">
              Artikel
            </Link>
            <Link to="/tanya-jawab" className="text-white hover:text-white/80 transition-colors">
              Tanya Jawab
            </Link>
            <Link to="/mitra" className="text-white hover:text-white/80 transition-colors">
              Mitra
            </Link>
          </nav>

          {/* Desktop Register Button */}
          <div className="hidden md:block">
            <Link to="/daftar">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                Daftar Sekarang
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
                to="/publikasi" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Publikasi
              </Link>
              <Link 
                to="/lembaga-pelatihan" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Lembaga Pelatihan
              </Link>
              <Link 
                to="/tips-bekerja" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Tips Bekerja
              </Link>
              <Link 
                to="/artikel" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Artikel
              </Link>
              <Link 
                to="/tanya-jawab" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Tanya Jawab
              </Link>
              <Link 
                to="/mitra" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Mitra
              </Link>
              <Link to="/daftar" onClick={closeMobileMenu}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full">
                  Daftar Sekarang
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
