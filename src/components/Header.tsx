
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-white font-bold text-xl hover:text-white/80 transition-colors">
              prakerja
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/publikasi" className="text-white hover:text-white/80 transition-colors">Publikasi</Link>
            <Link to="/lembaga-pelatihan" className="text-white hover:text-white/80 transition-colors">Lembaga Pelatihan</Link>
            <Link to="/tips-bekerja" className="text-white hover:text-white/80 transition-colors">Tips Bekerja</Link>
            <Link to="/artikel" className="text-white hover:text-white/80 transition-colors">Artikel</Link>
            <Link to="/tanya-jawab" className="text-white hover:text-white/80 transition-colors">Tanya Jawab</Link>
            <Link to="/mitra" className="text-white hover:text-white/80 transition-colors">Mitra</Link>
          </nav>

          <Link to="/daftar">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
