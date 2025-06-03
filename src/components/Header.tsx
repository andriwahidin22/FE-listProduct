
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl">prakerja</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors">Publikasi</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Lembaga Pelatihan</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Tips Bekerja</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Artikel</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Tanya Jawab</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Mitra</a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
