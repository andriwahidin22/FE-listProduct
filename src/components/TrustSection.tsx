
import { Shield, Award, Users, Globe, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "VB100 Award",
      description: "Sertifikat dari Virus Bulletin",
      year: "2024"
    },
    {
      icon: Shield,
      title: "AV-TEST Winner",
      description: "Best Protection 2024",
      year: "2024"
    },
    {
      icon: Star,
      title: "PC Magazine",
      description: "Editor's Choice Award",
      year: "2024"
    },
    {
      icon: Globe,
      title: "ISO 27001",
      description: "Information Security Standard",
      year: "2024"
    }
  ];

  const securityFeatures = [
    "Enkripsi AES 256-bit",
    "Two-Factor Authentication",
    "Zero-Log Policy",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "24/7 Security Monitoring"
  ];

  return (
    <section className="py-12 bg-white/5 backdrop-blur-sm rounded-2xl my-8 border border-white/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya & Diakui Secara Global
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            CyberGuard telah meraih berbagai penghargaan dan sertifikasi dari organisasi keamanan 
            internasional terkemuka
          </p>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-blue-200 mb-1">{achievement.description}</p>
                  <p className="text-xs text-orange-300">{achievement.year}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Standar Keamanan Tertinggi</h3>
            <p className="text-blue-100">Menggunakan teknologi keamanan enterprise-grade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-white text-sm">Trusted by:</div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-300" />
              <span className="text-white">10M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-300" />
              <span className="text-white">50K+ Companies</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-300" />
              <span className="text-white">150+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
