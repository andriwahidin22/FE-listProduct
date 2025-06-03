
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, User, ThumbsUp, Share2 } from "lucide-react";

const TipsBekerja = () => {
  const tips = [
    {
      id: 1,
      title: "5 Skill Digital yang Wajib Dikuasai di Era Modern",
      excerpt: "Pelajari skill digital yang paling dibutuhkan oleh perusahaan saat ini untuk meningkatkan peluang karir Anda",
      author: "Tim Kartu Prakerja",
      readTime: "8 menit",
      likes: 245,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
      category: "Skill Development"
    },
    {
      id: 2,
      title: "Cara Membangun Portfolio yang Menarik untuk Fresh Graduate",
      excerpt: "Tips praktis membangun portfolio yang dapat menarik perhatian rekruter meskipun Anda fresh graduate",
      author: "Sarah Pratiwi",
      readTime: "6 menit",
      likes: 189,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
      category: "Career Tips"
    },
    {
      id: 3,
      title: "Strategi Networking yang Efektif untuk Mencari Kerja",
      excerpt: "Panduan lengkap membangun jaringan profesional yang dapat membantu dalam pencarian kerja",
      author: "Ahmad Rizki",
      readTime: "10 menit",
      likes: 167,
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=200&fit=crop",
      category: "Networking"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tips Bekerja</h1>
          <p className="text-lg text-gray-600">
            Dapatkan tips dan strategi terbaik untuk mengembangkan karir dan mencari pekerjaan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <article key={tip.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={tip.image} 
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{tip.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{tip.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tip.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{tip.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Baca Selengkapnya
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

export default TipsBekerja;
