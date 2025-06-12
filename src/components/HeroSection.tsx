
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Shield, Lock, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailSubmit = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Mohon masukkan email Anda",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("downloadEmail", email);
    
    toast({
      title: "Success",
      description: "Email berhasil disimpan. Anda akan diarahkan ke halaman download.",
    });

    setTimeout(() => {
      navigate("/download");
    }, 1000);
  };

  return (
    <section className="py-16 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
            <Shield className="h-16 w-16 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Lindungi Sistem Anda<br />
          dengan <span className="text-orange-400">CyberGuard</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Solusi keamanan siber terdepan untuk melindungi bisnis Anda dari ancaman malware, 
          virus, ransomware, dan serangan siber lainnya. Dapatkan perlindungan real-time 
          yang dapat diandalkan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Masukkan email untuk trial gratis"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-4 pr-12 py-3 rounded-lg border-0 text-gray-800"
              onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
            />
            <Button
              size="sm"
              onClick={handleEmailSubmit}
              className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 px-3"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm opacity-80 mb-12">
          Trial gratis 30 hari • Tidak perlu kartu kredit • Setup dalam 5 menit
        </p>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4 inline-block">
              <Shield className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Antivirus Real-time</h3>
            <p className="text-sm opacity-80">Deteksi dan blokir malware secara otomatis</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4 inline-block">
              <Lock className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Firewall Advanced</h3>
            <p className="text-sm opacity-80">Perlindungan jaringan tingkat enterprise</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4 inline-block">
              <Zap className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Performa Optimal</h3>
            <p className="text-sm opacity-80">Tidak memperlambat sistem Anda</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
