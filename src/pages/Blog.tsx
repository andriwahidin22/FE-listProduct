import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  Clock,
  Search,
  TrendingUp,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = {
    id: 1,
    title: "Tren Keamanan Siber 2024: Ancaman AI dan Cara Menghadapinya",
    excerpt:
      "Pelajari bagaimana AI mengubah lanskap keamanan siber dan strategi perlindungan yang perlu disiapkan untuk menghadapi ancaman masa depan.",
    author: "Dr. Ahmad Rizki",
    date: "15 Desember 2024",
    readTime: "8 menit",
    category: "Trend Analysis",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    featured: true,
  };

  const posts = [
    {
      id: 2,
      title: "10 Tips Keamanan Password yang Harus Anda Ketahui",
      excerpt:
        "Panduan lengkap untuk membuat dan mengelola password yang kuat untuk melindungi akun digital Anda.",
      author: "Sarah Wijaya",
      date: "12 Desember 2024",
      readTime: "5 menit",
      category: "Security Tips",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Phishing Attack: Mengenal Ciri-ciri dan Cara Pencegahannya",
      excerpt:
        "Identifikasi berbagai jenis serangan phishing dan pelajari langkah-langkah untuk melindungi diri dari penipuan online.",
      author: "Michael Chen",
      date: "10 Desember 2024",
      readTime: "7 menit",
      category: "Threat Analysis",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Keamanan Work from Home: Best Practices untuk Remote Workers",
      excerpt:
        "Tips dan strategi untuk menjaga keamanan data dan sistem ketika bekerja dari rumah.",
      author: "Lisa Putri",
      date: "8 Desember 2024",
      readTime: "6 menit",
      category: "Remote Security",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Ransomware Protection: Strategi Comprehensive untuk Bisnis",
      excerpt:
        "Panduan lengkap melindungi bisnis dari serangan ransomware dengan strategi berlapis.",
      author: "David Santoso",
      date: "5 Desember 2024",
      readTime: "12 menit",
      category: "Business Security",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Mobile Security: Mengamankan Smartphone dari Cyber Threats",
      excerpt:
        "Tips praktis untuk melindungi perangkat mobile dari berbagai ancaman keamanan siber.",
      author: "Nina Sari",
      date: "3 Desember 2024",
      readTime: "4 menit",
      category: "Mobile Security",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    },
  ];

  const categories = [
    { name: "Security Tips", icon: Shield, count: 12 },
    { name: "Threat Analysis", icon: AlertTriangle, count: 8 },
    { name: "Trend Analysis", icon: TrendingUp, count: 6 },
    { name: "Business Security", icon: Shield, count: 10 },
    { name: "Mobile Security", icon: Shield, count: 5 },
  ];

  return (
    <Layout showHero={true}>
      <div className="h-12" />
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CyberGuard Blog
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Insight terbaru, tips keamanan, dan analisis mendalam tentang
              dunia cybersecurity dari para ahli CyberGuard
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-blue-200 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Artikel Unggulan
                </h2>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/20 transition-all text-white">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-orange-500/20 text-orange-400 text-xs px-2 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {featuredPost.title}
                      </h3>
                      <p className="text-blue-100 mb-4">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Artikel Terbaru
                </h2>
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card
                      key={post.id}
                      className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/20 transition-all text-white"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="mb-3">
                            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-white mb-3">
                            {post.title}
                          </h3>
                          <p className="text-blue-100 mb-4">{post.excerpt}</p>

                          <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            className="border-white/20 text-black hover:bg-white/10"
                          >
                            Baca Artikel
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Kategori</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 rounded hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-2">
                            <IconComponent className="h-4 w-4 text-orange-400" />
                            <span className="text-blue-100">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-xs bg-white/10 px-2 py-1 rounded text-blue-200">
                            {category.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Newsletter</CardTitle>
                  <CardDescription className="text-blue-100">
                    Dapatkan artikel cybersecurity terbaru
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                    />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Artikel Populer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post, index) => (
                      <div key={post.id} className="flex space-x-3">
                        <span className="text-orange-400 font-bold text-lg">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-white leading-tight mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-blue-200">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
