import React from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Zap,
  Users,
  Globe,
  Smartphone,
  Server,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "CyberGuard Antivirus Pro",
      description:
        "Perlindungan antivirus terdepan dengan teknologi AI untuk deteksi real-time",
      icon: Shield,
      price: "Rp 299.000/tahun",
      features: [
        "Real-time scanning",
        "AI malware detection",
        "Web protection",
        "Email security",
      ],
      category: "Personal",
    },
    {
      id: 2,
      name: "CyberGuard Firewall Enterprise",
      description:
        "Solusi firewall tingkat enterprise untuk perlindungan jaringan komprehensif",
      icon: Lock,
      price: "Rp 2.999.000/tahun",
      features: [
        "Advanced threat detection",
        "Network monitoring",
        "VPN support",
        "Multi-layer security",
      ],
      category: "Enterprise",
    },
    {
      id: 3,
      name: "CyberGuard Performance Booster",
      description:
        "Optimasi sistem untuk performa maksimal tanpa mengorbankan keamanan",
      icon: Zap,
      price: "Rp 199.000/tahun",
      features: [
        "System optimization",
        "Startup manager",
        "Registry cleaner",
        "Memory booster",
      ],
      category: "Personal",
    },
    {
      id: 4,
      name: "CyberGuard Family Protection",
      description:
        "Perlindungan khusus untuk keluarga dengan kontrol orang tua",
      icon: Users,
      price: "Rp 399.000/tahun",
      features: [
        "Parental controls",
        "Safe browsing",
        "Time limits",
        "Content filtering",
      ],
      category: "Family",
    },
    {
      id: 5,
      name: "CyberGuard Web Security",
      description:
        "Perlindungan browsing dengan filter konten dan anti-phishing",
      icon: Globe,
      price: "Rp 149.000/tahun",
      features: [
        "Anti-phishing",
        "Safe browsing",
        "Ad blocker",
        "Privacy protection",
      ],
      category: "Personal",
    },
    {
      id: 6,
      name: "CyberGuard Mobile Security",
      description:
        "Keamanan komprehensif untuk perangkat mobile Android dan iOS",
      icon: Smartphone,
      price: "Rp 179.000/tahun",
      features: ["App scanning", "Anti-theft", "VPN mobile", "Safe WiFi"],
      category: "Mobile",
    },
    {
      id: 7,
      name: "CyberGuard Server Protection",
      description: "Solusi keamanan khusus untuk server dan infrastruktur IT",
      icon: Server,
      price: "Rp 4.999.000/tahun",
      features: [
        "Server monitoring",
        "Vulnerability scanning",
        "Backup protection",
        "24/7 support",
      ],
      category: "Enterprise",
    },
    {
      id: 8,
      name: "CyberGuard Threat Intelligence",
      description:
        "Layanan intelijen ancaman untuk deteksi dini serangan siber",
      icon: AlertTriangle,
      price: "Rp 1.999.000/tahun",
      features: [
        "Threat analysis",
        "Early warning",
        "Custom reports",
        "Expert consultation",
      ],
      category: "Enterprise",
    },
  ];

  const categories = ["All", "Personal", "Family", "Mobile", "Enterprise"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Layout showHero={true}>
      <div className="h-12" />
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Produk Keamanan Siber Terlengkap
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Lindungi sistem, data, dan privasi Anda dengan rangkaian produk
              keamanan siber terdepan dari CyberGuard
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={product.id}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-white"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-orange-400" />
                    </div>
                    <CardTitle className="text-lg text-white">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-blue-100">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-orange-400 mb-2">
                        {product.price}
                      </div>
                      <div className="inline-block px-2 py-1 bg-white/10 text-blue-100 text-xs rounded-full">
                        {product.category}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-blue-100"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <Link to="/download">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Download Sekarang
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-black hover:bg-white/10"
                      >
                        Pelajari Lebih Lanjut
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Butuh Solusi Khusus?</h2>
            <p className="text-lg opacity-90 mb-6">
              Tim ahli kami siap membantu Anda menemukan solusi keamanan yang
              tepat untuk kebutuhan spesifik Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link to="/support">
                <Button
                  variant="outline"
                  className="border-white/20 text-black hover:bg-white/10 px-8 py-3"
                >
                  Hubungi Support
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
