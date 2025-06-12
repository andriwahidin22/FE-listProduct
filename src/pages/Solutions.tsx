import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Smartphone, Shield, Cloud, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Solusi Enterprise",
      description: "Perlindungan komprehensif untuk perusahaan besar dengan infrastruktur IT kompleks",
      features: [
        "Endpoint Detection & Response (EDR)",
        "Network Security Monitoring",
        "Threat Intelligence",
        "24/7 SOC Support",
        "Compliance Management"
      ],
      industries: ["Perbankan", "Telekomunikasi", "Pemerintahan"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      title: "Solusi UKM",
      description: "Paket keamanan terjangkau untuk usaha kecil dan menengah",
      features: [
        "Antivirus & Anti-malware",
        "Firewall Sederhana",
        "Email Protection",
        "Data Backup",
        "Remote Support"
      ],
      industries: ["Retail", "Restoran", "Jasa Profesional"],
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Smartphone,
      title: "Solusi Mobile",
      description: "Keamanan khusus untuk perangkat mobile dan aplikasi",
      features: [
        "Mobile Device Management",
        "App Security Testing",
        "Mobile VPN",
        "Anti-theft Protection",
        "Secure Communication"
      ],
      industries: ["Startup", "Digital Agency", "E-commerce"],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Shield,
      title: "Solusi Personal",
      description: "Perlindungan komprehensif untuk pengguna individu dan keluarga",
      features: [
        "Multi-device Protection",
        "Parental Controls",
        "Identity Protection",
        "Secure Password Manager",
        "Privacy Tools"
      ],
      industries: ["Rumah Tangga", "Freelancer", "Pelajar"],
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: Cloud,
      title: "Solusi Cloud",
      description: "Keamanan untuk infrastruktur cloud dan layanan SaaS",
      features: [
        "Cloud Security Posture Management",
        "API Security",
        "Container Security",
        "Multi-cloud Monitoring",
        "Compliance Automation"
      ],
      industries: ["Tech Startup", "SaaS Provider", "Cloud Migration"],
      gradient: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Factory,
      title: "Solusi Industrial",
      description: "Keamanan khusus untuk sistem industri dan IoT",
      features: [
        "OT Security Monitoring",
        "IoT Device Protection",
        "Industrial Firewall",
        "SCADA Security",
        "Critical Infrastructure Protection"
      ],
      industries: ["Manufaktur", "Energi", "Transportasi"],
      gradient: "from-red-500 to-red-700"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solusi Keamanan untuk Setiap Kebutuhan
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Dari perusahaan multinasional hingga pengguna personal, kami memiliki 
              solusi keamanan siber yang tepat untuk setiap skala bisnis
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden text-white">
                  <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${solution.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-white">{solution.title}</CardTitle>
                    <CardDescription className="text-blue-100">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-blue-100">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Cocok untuk:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, industryIndex) => (
                          <span key={industryIndex} className="px-2 py-1 bg-white/10 text-blue-100 text-xs rounded-full">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link to="/contact">
                        <Button className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white`}>
                          Konsultasi Gratis
                        </Button>
                      </Link>
                      <Link to="/products">
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                          Lihat Produk
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why Choose Our Solutions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16 border border-white/20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Mengapa Memilih Solusi CyberGuard?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Teknologi Terdepan</h3>
                <p className="text-sm text-blue-100">AI dan machine learning untuk deteksi ancaman real-time</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Tim Ahli</h3>
                <p className="text-sm text-blue-100">Tim security expert berpengalaman 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Scalable</h3>
                <p className="text-sm text-blue-100">Solusi yang dapat disesuaikan dengan pertumbuhan bisnis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Cloud-Ready</h3>
                <p className="text-sm text-blue-100">Kompatibel dengan semua platform cloud major</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Siap Mengamankan Bisnis Anda?</h2>
            <p className="text-lg opacity-90 mb-6">
              Konsultasi gratis dengan security expert kami untuk menemukan solusi yang tepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Mulai Konsultasi
                </Button>
              </Link>
              <Link to="/download">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  Download Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
