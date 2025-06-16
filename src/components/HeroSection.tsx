
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Shield, Lock, Zap, CheckCircle, Play } from "lucide-react";
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

  const benefits = [
    "Trial gratis 30 hari",
    "Tidak perlu kartu kredit",
    "Setup dalam 5 menit",
    "Support 24/7"
  ];

  return (
    <section className="py-16 text-center text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 relative">
            <Shield className="h-16 w-16 text-white" />
            <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-1">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏆 Terpercaya oleh 10+ Juta Pengguna
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Lindungi Sistem Anda<br />
          dengan <span className="text-orange-400 relative">
            CyberGuard
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Solusi keamanan siber terdepan dengan teknologi AI untuk melindungi bisnis Anda dari 
          ancaman malware, virus, ransomware, dan serangan siber lainnya. Dapatkan perlindungan 
          real-time yang dapat diandalkan.
        </p>

        {/* Download CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Mulai Trial Gratis Sekarang!</h3>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Masukkan email untuk trial gratis"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-4 pr-12 py-3 rounded-lg border-0 text-gray-800 h-12"
                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
              />
              <Button
                size="sm"
                onClick={handleEmailSubmit}
                className="absolute right-1 top-1 bottom-1 bg-orange-500 hover:bg-orange-600 px-4"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="h-4 w-4" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Video */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                  alt="CyberGuard Demo"
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white rounded-full p-6 hover:scale-110 transition-all">
                    <Play className="h-8 w-8 text-gray-800 ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🔴 LIVE
                </div>
              </div>
              <p className="text-blue-100 mt-4">
                Tonton demo 5 menit bagaimana CyberGuard melindungi sistem Anda
              </p>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-4 border border-white/20 group-hover:bg-white/20 transition-all">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Antivirus Real-time</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Deteksi dan blokir malware secara otomatis dengan teknologi AI terdepan
              </p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-4 border border-white/20 group-hover:bg-white/20 transition-all">
              <Lock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Firewall Advanced</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Perlindungan jaringan tingkat enterprise dengan monitoring 24/7
              </p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-4 border border-white/20 group-hover:bg-white/20 transition-all">
              <Zap className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performa Optimal</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Optimasi sistem tanpa mengurangi kecepatan dan performa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
