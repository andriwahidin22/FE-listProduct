
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Wifi, Smartphone, Globe, Users, Zap, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "CyberGuard Antivirus Pro",
      description: "Perlindungan komprehensif untuk PC dan laptop dengan AI-powered detection",
      features: ["Real-time scanning", "Behavioral analysis", "Automatic updates", "Ransomware protection"],
      price: "Rp 299,000/tahun",
      popular: true
    },
    {
      icon: <Lock className="h-8 w-8 text-green-600" />,
      title: "CyberGuard Firewall Enterprise",
      description: "Solusi firewall tingkat enterprise untuk bisnis dan organisasi",
      features: ["Advanced threat detection", "Network monitoring", "Intrusion prevention", "VPN access"],
      price: "Rp 1,999,000/tahun"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "CyberGuard Mobile Security",
      description: "Keamanan lengkap untuk smartphone dan tablet Android/iOS",
      features: ["App scanner", "Web protection", "Anti-theft", "Privacy advisor"],
      price: "Rp 199,000/tahun"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "CyberGuard Web Protection",
      description: "Perlindungan browsing untuk keluarga dan bisnis",
      features: ["Safe browsing", "Phishing protection", "Content filtering", "Parental controls"],
      price: "Rp 149,000/tahun"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "CyberGuard Business Suite",
      description: "Solusi keamanan lengkap untuk perusahaan dengan multi-device management",
      features: ["Centralized management", "Endpoint protection", "Email security", "24/7 support"],
      price: "Rp 99,000/device/bulan"
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "CyberGuard Backup & Recovery",
      description: "Solusi backup otomatis dan disaster recovery untuk data kritikal",
      features: ["Automatic backup", "Cloud storage", "Instant recovery", "Version control"],
      price: "Rp 399,000/tahun"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Produk CyberGuard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih solusi keamanan yang tepat untuk kebutuhan Anda. Semua produk dilengkapi dengan trial gratis 30 hari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className={`relative ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Paling Populer
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {product.icon}
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-gray-900 mb-4">{product.price}</div>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Zap className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Link to="/download">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Trial Gratis 30 Hari
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Pelajari Lebih Lanjut
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tidak Yakin Pilih Yang Mana?</h2>
            <p className="text-gray-600 mb-6">
              Tim ahli kami siap membantu Anda memilih solusi yang tepat untuk kebutuhan spesifik Anda.
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
        </div>
      </div>
    </Layout>
  );
};

export default Products;
