
import { Button } from "@/components/ui/button";
import { Download, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Trial gratis 30 hari tanpa kartu kredit",
    "Setup instan dalam 5 menit",
    "Support 24/7 dari tim ahli",
    "Garansi 100% uang kembali"
  ];

  return (
    <section className="py-16 mt-12">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4">
            <Shield className="h-24 w-24" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Shield className="h-32 w-32" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Shield className="h-40 w-40" />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mulai Melindungi Sistem Anda Hari Ini!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Jangan biarkan sistem Anda rentan terhadap serangan siber. 
            Dapatkan perlindungan terbaik sekarang juga.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/download">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Gratis Sekarang
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
              >
                Hubungi Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm opacity-80">
            <p>✨ Lebih dari 10 juta pengguna mempercayai CyberGuard</p>
            <p className="mt-1">🔒 Perlindungan enterprise-grade untuk semua</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
