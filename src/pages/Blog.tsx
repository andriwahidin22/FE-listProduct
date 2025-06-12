
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Tren Ancaman Siber 2024: Yang Perlu Anda Ketahui",
    excerpt: "Pelajari tentang tren ancaman siber terbaru dan bagaimana melindungi diri Anda dari serangan yang semakin canggih di tahun 2024.",
    author: "Dr. Ahmad Cyber",
    date: "15 Desember 2024",
    category: "Cyber Threat",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      title: "Cara Melindungi WFH dengan VPN",
      excerpt: "Panduan lengkap mengamankan koneksi work from home menggunakan VPN yang tepat.",
      author: "Sarah Security",
      date: "12 Desember 2024",
      category: "Remote Work",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Ransomware: Pencegahan dan Recovery",
      excerpt: "Strategi komprehensif untuk mencegah serangan ransomware dan melakukan recovery data.",
      author: "Michael Guardian",
      date: "10 Desember 2024",
      category: "Malware",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      readTime: "10 min read"
    },
    {
      title: "AI dalam Cybersecurity: Masa Depan Keamanan",
      excerpt: "Bagaimana artificial intelligence mengubah landscape cybersecurity modern.",
      author: "Lisa Defender",
      date: "8 Desember 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Phishing Attack: Mengenali dan Menghindari",
      excerpt: "Tips praktis mengenali email phishing dan melindungi informasi pribadi Anda.",
      author: "Dr. Ahmad Cyber",
      date: "5 Desember 2024",
      category: "Social Engineering",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Password Manager: Mengapa Anda Membutuhkannya",
      excerpt: "Pentingnya menggunakan password manager untuk keamanan akun digital Anda.",
      author: "Sarah Security",
      date: "3 Desember 2024",
      category: "Password Security",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "IoT Security: Mengamankan Smart Home",
      excerpt: "Panduan keamanan untuk perangkat IoT dan smart home devices.",
      author: "Michael Guardian",
      date: "1 Desember 2024",
      category: "IoT Security",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      readTime: "9 min read"
    }
  ];

  const categories = [
    "All", "Cyber Threat", "Malware", "Remote Work", "Technology", 
    "Social Engineering", "Password Security", "IoT Security"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CyberGuard Security Blog
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Insights, tips, dan berita terbaru tentang cybersecurity dari para ahli. 
              Tetap update dengan perkembangan dunia keamanan siber
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Cari artikel, tips, atau topik..."
                className="pl-12 pr-4 py-3 text-gray-800 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>By {featuredPost.author}</span>
                    </div>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Categories Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="hover:bg-cyan-50 hover:border-cyan-300"
                >
                  <Tag className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 text-cyan-600 text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 text-xs text-gray-600 mb-2">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <Button variant="outline" className="px-8 py-3">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-6">
              Dapatkan artikel terbaru dan tips keamanan siber langsung ke email Anda
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="text-gray-800"
              />
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              Gratis dan mudah untuk unsubscribe kapan saja
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
