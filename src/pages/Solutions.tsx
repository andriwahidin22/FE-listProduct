
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
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
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
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${solution.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Cocok untuk:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, industryIndex) => (
                          <span key={industryIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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
                        <Button variant="outline" className="w-full">
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
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih Solusi CyberGuard?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Teknologi Terdepan</h3>
                <p className="text-sm text-gray-600">AI dan machine learning untuk deteksi ancaman real-time</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Tim Ahli</h3>
                <p className="text-sm text-gray-600">Tim security expert berpengalaman 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Scalable</h3>
                <p className="text-sm text-gray-600">Solusi yang dapat disesuaikan dengan pertumbuhan bisnis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Cloud-Ready</h3>
                <p className="text-sm text-gray-600">Kompatibel dengan semua platform cloud major</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Mengamankan Bisnis Anda?</h2>
            <p className="text-lg opacity-90 mb-6">
              Konsultasi gratis dengan security expert kami untuk menemukan solusi yang tepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Mulai Konsultasi
                </Button>
              </Link>
              <Link to="/download">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
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
