
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

const LembagaPelatihan = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const lembaga = [
    {
      id: 1,
      name: "Skill Academy by Tokopedia",
      description: "Platform pembelajaran online dengan beragam kelas digital dan teknologi",
      location: "Jakarta",
      rating: 4.8,
      students: "150,000+",
      courses: 250,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Pintaria",
      description: "Learning Management System dengan fokus pada skill praktis dan sertifikasi",
      location: "Bandung",
      rating: 4.7,
      students: "75,000+",
      courses: 180,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Course-Net",
      description: "Pelatihan IT dan teknologi dengan instruktur berpengalaman",
      location: "Surabaya",
      rating: 4.6,
      students: "45,000+",
      courses: 120,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Lembaga Pelatihan</h1>
          <p className="text-lg text-gray-600 mb-6">
            Temukan lembaga pelatihan terpercaya yang bekerja sama dengan Program Kartu Prakerja
          </p>

          <div className="relative max-w-md">
            <Input
              type="text"
              placeholder="Cari lembaga pelatihan..."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lembaga.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{item.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{item.students} siswa</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">{item.courses} kursus</span>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LembagaPelatihan;
