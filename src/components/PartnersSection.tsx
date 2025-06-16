
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop",
      description: "Technology Partner"
    },
    {
      name: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop",
      description: "Cloud Security Partner"
    },
    {
      name: "Amazon AWS",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop",
      description: "Infrastructure Partner"
    },
    {
      name: "Cisco",
      logo: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=120&h=60&fit=crop",
      description: "Network Security Partner"
    },
    {
      name: "Intel",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop",
      description: "Hardware Security Partner"
    },
    {
      name: "VMware",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      description: "Virtualization Partner"
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "PCI DSS Certified"
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Partners */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya oleh Partner Teknologi Terdepan
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Bekerja sama dengan perusahaan teknologi global untuk memberikan solusi keamanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-full h-12 bg-white/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-blue-200">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sertifikasi & Kepatuhan</h3>
            <p className="text-blue-100">Memenuhi standar keamanan dan kepatuhan internasional tertinggi</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-sm text-white font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
