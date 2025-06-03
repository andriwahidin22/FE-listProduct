
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="py-16 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Gali potensi dirimu<br />
          dengan Kartu Prakerja
        </h1>
        
        <p className="text-lg mb-8 opacity-90">
          Online atau kerja? Ingin lebih kompeten? Mau mengembangkan diri<br />
          tanpa pusing memikirkan biaya? Raikai dirimu dengan Kartu<br />
          Prakerja dan <span className="font-semibold">#SiapDariSekarang</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Masukkan email Anda"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-12 py-3 rounded-lg border-0 text-gray-800"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 px-3"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm opacity-80">
          Masukkan email untuk buat akun Prakerja
        </p>

        <div className="flex justify-center mt-12 space-x-8">
          <div className="relative">
            <img
              src="/lovable-uploads/af7ac4a6-49ab-410d-99d9-7fe32fc22f4e.png"
              alt="Hero illustration"
              className="w-96 h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
