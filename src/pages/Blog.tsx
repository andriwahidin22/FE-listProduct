
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Shield, Lock, Zap } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Ancaman Siber Terbesar di 2024 dan Cara Mengatasinya",
      excerpt: "Pelajari tentang ancaman siber terbaru yang mengintai bisnis Anda dan strategi perlindungan yang efektif.",
      date: "15 Januari 2024",
      author: "Tim Research CyberGuard",
      category: "Threat Intelligence",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Panduan Lengkap Implementasi Zero Trust Security",
      excerpt: "Implementasi arsitektur Zero Trust untuk meningkatkan keamanan jaringan perusahaan modern.",
      date: "12 Januari 2024",
      author: "Dr. Ahmad Prasetyo",
      category: "Security Strategy",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "AI dan Machine Learning dalam Deteksi Malware",
      excerpt: "Bagaimana teknologi AI mengubah cara kita mendeteksi dan mencegah serangan malware canggih.",
      date: "10 Januari 2024",
      author: "Sarah Wijaya",
      category: "Technology",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Ransomware Defense: Strategi Berlapis untuk Perlindungan Maksimal",
      excerpt: "Pelajari strategi berlapis untuk melindungi data perusahaan dari serangan ransomware yang semakin canggih.",
      date: "8 Januari 2024",
      author: "Michael Chen",
      category: "Malware Protection",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Cloud Security Best Practices untuk Enterprise",
      excerpt: "Panduan komprehensif untuk mengamankan infrastruktur cloud perusahaan dengan standar enterprise.",
      date: "5 Januari 2024",
      author: "Tim Technical",
      category: "Cloud Security",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "Incident Response: Langkah Cepat Saat Terjadi Serangan Siber",
      excerpt: "Protokol tanggap darurat yang harus dilakukan perusahaan ketika menghadapi insiden keamanan siber.",
      date: "3 Januari 2024",
      author: "Tim Security",
      category: "Incident Response",
      icon: <Zap className="h-5 w-5" />
    }
  ];

  const categories = [
    "Semua Artikel",
    "Threat Intelligence", 
    "Security Strategy",
    "Technology",
    "Malware Protection",
    "Cloud Security",
    "Incident Response"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CyberGuard Security Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights terbaru tentang keamanan siber, threat intelligence, dan best practices dari para ahli CyberGuard.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${index === 0 ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-blue-600">
                      {post.icon}
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Newsletter Keamanan Siber</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Dapatkan update mingguan tentang ancaman siber terbaru, tips keamanan, dan insight dari para ahli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              Gratis • Unsubscribe kapan saja • Tidak ada spam
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
