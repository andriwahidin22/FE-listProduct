
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Eye } from "lucide-react";

const Publikasi = () => {
  const publikasi = [
    {
      id: 1,
      title: "Laporan Evaluasi Program Kartu Prakerja 2024",
      description: "Evaluasi menyeluruh terhadap dampak dan efektivitas Program Kartu Prakerja tahun 2024",
      date: "15 Desember 2024",
      views: "2,341",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Panduan Lengkap Kartu Prakerja untuk Peserta Baru",
      description: "Panduan step-by-step untuk peserta baru dalam mengikuti Program Kartu Prakerja",
      date: "1 Desember 2024",
      views: "5,678",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Statistik Penerima Kartu Prakerja Q4 2024",
      description: "Data statistik dan analisis penerima Program Kartu Prakerja kuartal ke-4 tahun 2024",
      date: "20 November 2024",
      views: "1,892",
      downloadUrl: "#"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Publikasi</h1>
          <p className="text-lg text-gray-600">
            Akses dokumen, laporan, dan publikasi resmi Program Kartu Prakerja
          </p>
        </div>

        <div className="grid gap-6">
          {publikasi.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views} views</span>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Publikasi;
