
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag } from "lucide-react";
import { useState } from "react";

const Artikel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Transformasi Digital dan Dampaknya terhadap Pasar Kerja Indonesia",
      excerpt: "Analisis mendalam tentang bagaimana transformasi digital mengubah lanskap pekerjaan di Indonesia dan peluang yang muncul",
      author: "Dr. Indra Sari",
      date: "12 Desember 2024",
      category: "Transformasi Digital",
      readTime: "12 menit",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Pentingnya Upskilling dan Reskilling di Era Industry 4.0",
      excerpt: "Mengapa pengembangan skill berkelanjutan menjadi kunci sukses dalam menghadapi perubahan industri",
      author: "Prof. Ahmad Budi",
      date: "8 Desember 2024",
      category: "Pengembangan Skill",
      readTime: "9 menit",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Strategi Pemerintah dalam Meningkatkan Kualitas SDM Indonesia",
      excerpt: "Tinjauan komprehensif terhadap berbagai program pemerintah untuk meningkatkan kualitas sumber daya manusia",
      author: "Siti Nurhaliza",
      date: "5 Desember 2024",
      category: "Kebijakan Publik",
      readTime: "15 menit",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artikel</h1>
          <p className="text-lg text-gray-600 mb-6">
            Baca artikel terkini tentang pengembangan skill, karir, dan dunia kerja
          </p>

          <div className="relative max-w-md">
            <Input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-12 py-3"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 px-3"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Baca Artikel Lengkap
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Artikel;
