
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users, BookOpen } from "lucide-react";

const Mitra = () => {
  const mitra = [
    {
      id: 1,
      name: "Tokopedia",
      description: "Platform e-commerce terbesar di Indonesia dengan Skill Academy sebagai platform pembelajaran",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
      website: "https://skillacademy.com",
      courses: 250,
      students: "2M+",
      rating: 4.8,
      specialization: "Digital Marketing, E-commerce, Teknologi"
    },
    {
      id: 2,
      name: "Ruangguru",
      description: "Platform pendidikan teknologi terdepan di Indonesia dengan fokus pada skill digital",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
      website: "https://ruangguru.com",
      courses: 180,
      students: "1.5M+",
      rating: 4.7,
      specialization: "Pendidikan, Teknologi, Data Science"
    },
    {
      id: 3,
      name: "Pintaria",
      description: "Learning Management System dengan kurikulum yang disesuaikan dengan kebutuhan industri",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      website: "https://pintaria.com",
      courses: 150,
      students: "800K+",
      rating: 4.6,
      specialization: "Business Skills, IT, Desain"
    },
    {
      id: 4,
      name: "Course-Net",
      description: "Lembaga pelatihan IT profesional dengan pengalaman lebih dari 20 tahun",
      logo: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=100&fit=crop",
      website: "https://course-net.com",
      courses: 120,
      students: "500K+",
      rating: 4.5,
      specialization: "Programming, Network, Cybersecurity"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mitra Kartu Prakerja</h1>
          <p className="text-lg text-gray-600">
            Temukan platform pelatihan terpercaya yang bekerja sama dengan Program Kartu Prakerja
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mitra.map((partner) => (
            <div key={partner.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{partner.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{partner.rating}/5</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Kunjungi
                </Button>
              </div>

              <p className="text-gray-600 mb-4">{partner.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-800">{partner.courses}</div>
                  <div className="text-xs text-gray-500">Kursus</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-800">{partner.students}</div>
                  <div className="text-xs text-gray-500">Siswa</div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Spesialisasi:</h4>
                <p className="text-sm text-gray-600">{partner.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ingin Menjadi Mitra Kartu Prakerja?</h2>
          <p className="text-blue-100 mb-6">
            Bergabunglah dengan program mitra dan bantu meningkatkan kualitas SDM Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Daftar Sebagai Mitra
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mitra;
