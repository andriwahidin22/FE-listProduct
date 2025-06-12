
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Wifi, Smartphone, Globe, Users, Zap, Database, Monitor, Server, Cloud, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "CyberGuard Antivirus Pro",
      description: "Perlindungan komprehensif untuk PC dan laptop dengan AI-powered detection",
      features: ["Real-time scanning", "Behavioral analysis", "Automatic updates", "Ransomware protection"],
      price: "Rp 299,000/tahun",
      popular: true,
      category: "Endpoint Protection"
    },
    {
      icon: <Lock className="h-8 w-8 text-green-600" />,
      title: "CyberGuard Firewall Enterprise",
      description: "Solusi firewall tingkat enterprise untuk bisnis dan organisasi",
      features: ["Advanced threat detection", "Network monitoring", "Intrusion prevention", "VPN access"],
      price: "Rp 1,999,000/tahun",
      category: "Network Security"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "CyberGuard Mobile Security",
      description: "Keamanan lengkap untuk smartphone dan tablet Android/iOS",
      features: ["App scanner", "Web protection", "Anti-theft", "Privacy advisor"],
      price: "Rp 199,000/tahun",
      category: "Mobile Security"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "CyberGuard Web Protection",
      description: "Perlindungan browsing untuk keluarga dan bisnis",
      features: ["Safe browsing", "Phishing protection", "Content filtering", "Parental controls"],
      price: "Rp 149,000/tahun",
      category: "Web Security"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "CyberGuard Business Suite",
      description: "Solusi keamanan lengkap untuk perusahaan dengan multi-device management",
      features: ["Centralized management", "Endpoint protection", "Email security", "24/7 support"],
      price: "Rp 99,000/device/bulan",
      category: "Business Solutions"
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "CyberGuard Backup & Recovery",
      description: "Solusi backup otomatis dan disaster recovery untuk data kritikal",
      features: ["Automatic backup", "Cloud storage", "Instant recovery", "Version control"],
      price: "Rp 399,000/tahun",
      category: "Data Protection"
    },
    {
      icon: <Monitor className="h-8 w-8 text-cyan-600" />,
      title: "CyberGuard SIEM Platform",
      description: "Security Information and Event Management untuk monitoring real-time",
      features: ["Log analysis", "Threat correlation", "Incident response", "Compliance reporting"],
      price: "Rp 2,999,000/bulan",
      category: "Enterprise Security"
    },
    {
      icon: <Server className="h-8 w-8 text-emerald-600" />,
      title: "CyberGuard Server Protection",
      description: "Perlindungan khusus untuk server Windows dan Linux",
      features: ["Server hardening", "Vulnerability scanning", "Patch management", "Access control"],
      price: "Rp 599,000/server/bulan",
      category: "Server Security"
    },
    {
      icon: <Cloud className="h-8 w-8 text-sky-600" />,
      title: "CyberGuard Cloud Security",
      description: "Keamanan cloud untuk AWS, Azure, dan Google Cloud Platform",
      features: ["Cloud monitoring", "Configuration assessment", "Identity management", "Compliance audit"],
      price: "Rp 1,499,000/bulan",
      category: "Cloud Security"
    },
    {
      icon: <Eye className="h-8 w-8 text-amber-600" />,
      title: "CyberGuard Threat Intelligence",
      description: "Intelligence ancaman real-time untuk deteksi proaktif",
      features: ["Threat feeds", "IOC analysis", "Attack attribution", "Risk assessment"],
      price: "Rp 3,999,000/bulan",
      category: "Threat Intelligence"
    }
  ];

  const categories = ["Semua Produk", "Endpoint Protection", "Network Security", "Mobile Security", "Web Security", "Business Solutions", "Data Protection", "Enterprise Security", "Server Security", "Cloud Security", "Threat Intelligence"];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Produk CyberGuard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih solusi keamanan yang tepat untuk kebutuhan Anda. Semua produk dilengkapi dengan trial gratis 30 hari dan dukungan teknis 24/7.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`${index === 0 ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Paling Populer
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    {product.icon}
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                      <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-xl font-bold text-gray-900 mb-4">{product.price}</div>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Zap className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Link to="/download">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                        Trial Gratis 30 Hari
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full text-sm">
                      Pelajari Lebih Lanjut
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tidak Yakin Pilih Yang Mana?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih solusi yang tepat untuk kebutuhan spesifik Anda. 
              Dapatkan konsultasi gratis dan rekomendasi produk yang sesuai dengan budget dan kebutuhan perusahaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" className="px-8">
                  Hubungi Sales
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Mengapa CyberGuard?</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Dipercaya oleh 50,000+ perusahaan di seluruh dunia dengan teknologi keamanan siber terdepan
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-90">Tingkat Deteksi</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-90">Perusahaan Terlindungi</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Teknis</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Penghargaan Industri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
