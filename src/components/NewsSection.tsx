
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Eye, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Ancaman Siber Terbaru 2024: Apa yang Perlu Anda Ketahui",
      excerpt: "Pelajari tentang tren ancaman siber terbaru dan bagaimana melindungi diri dari serangan ransomware dan phishing yang semakin canggih.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      date: "15 Juni 2024",
      readTime: "5 min",
      views: "2.1K",
      comments: 12,
      category: "Keamanan"
    },
    {
      id: 2,
      title: "Tips Mengamankan Perangkat Mobile dari Malware",
      excerpt: "Panduan lengkap untuk melindungi smartphone dan tablet Anda dari berbagai jenis malware dan aplikasi berbahaya.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      date: "12 Juni 2024",
      readTime: "3 min",
      views: "1.8K",
      comments: 8,
      category: "Mobile"
    },
    {
      id: 3,
      title: "Implementasi Zero Trust Security untuk Bisnis",
      excerpt: "Memahami konsep Zero Trust dan bagaimana mengimplementasikannya untuk meningkatkan keamanan infrastruktur IT perusahaan.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      date: "10 Juni 2024",
      readTime: "7 min",
      views: "3.2K",
      comments: 15,
      category: "Enterprise"
    }
  ];

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Berita & Tips Keamanan Terbaru
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Tetap update dengan informasi keamanan siber terkini, tips praktis, dan panduan
            dari para ahli untuk melindungi digital asset Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card key={article.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-blue-100 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-blue-300">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${article.id}`}>
                    <Button variant="ghost" size="sm" className="text-orange-300 hover:text-orange-200 hover:bg-white/10 p-2">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Lihat Semua Artikel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
