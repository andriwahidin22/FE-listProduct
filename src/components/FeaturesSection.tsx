
import { Shield, Lock, Zap, Globe, Smartphone, Users, AlertTriangle, Wifi } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Perlindungan 24/7 dengan AI-powered detection",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Lock,
      title: "Advanced Firewall",
      description: "Blokir ancaman sebelum masuk ke sistem",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Optimasi sistem tanpa mengurangi keamanan",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Web Protection",
      description: "Browsing aman dengan anti-phishing",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Lindungi perangkat mobile Android & iOS",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Family Protection",
      description: "Kontrol orang tua untuk keamanan keluarga",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Deteksi dini dengan analisis ancaman terbaru",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: Wifi,
      title: "VPN Terintegrasi",
      description: "Koneksi aman dengan VPN premium",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fitur Unggulan CyberGuard
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Solusi keamanan siber terlengkap dengan teknologi terdepan untuk melindungi 
          semua aspek digital Anda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-white">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white group-hover:text-orange-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-blue-100">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
