
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronUp, MessageCircle, ThumbsUp } from "lucide-react";
import { useState } from "react";

const TanyaJawab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Apa itu Program Kartu Prakerja?",
      answer: "Program Kartu Prakerja adalah program pengembangan kompetensi kerja yang ditujukan untuk pencari kerja, pekerja/buruh yang terkena pemutusan hubungan kerja, dan/atau pekerja/buruh yang membutuhkan peningkatan kompetensi.",
      category: "Umum",
      votes: 45
    },
    {
      id: 2,
      question: "Siapa saja yang bisa mendaftar Kartu Prakerja?",
      answer: "WNI berusia 18 tahun ke atas, tidak sedang menempuh pendidikan formal, sedang mencari kerja atau membutuhkan peningkatan kompetensi, bukan PNS/TNI/Polri, dan maksimal 2 NIK dalam 1 KK.",
      category: "Pendaftaran",
      votes: 38
    },
    {
      id: 3,
      question: "Berapa bantuan dana yang diberikan melalui Kartu Prakerja?",
      answer: "Penerima Kartu Prakerja akan mendapat bantuan dana pelatihan sebesar Rp 3.550.000 yang terdiri dari biaya pelatihan dan insentif pasca pelatihan.",
      category: "Bantuan",
      votes: 52
    },
    {
      id: 4,
      question: "Bagaimana cara menggunakan Kartu Prakerja?",
      answer: "Setelah lolos seleksi, Anda dapat memilih pelatihan di platform mitra, mengikuti pelatihan hingga selesai, dan melaporkan aktivitas pencarian kerja untuk mendapat insentif.",
      category: "Penggunaan",
      votes: 29
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tanya Jawab</h1>
          <p className="text-lg text-gray-600 mb-6">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang Program Kartu Prakerja
          </p>

          <div className="relative max-w-md mb-6">
            <Input
              type="text"
              placeholder="Cari pertanyaan..."
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

          <Button className="bg-orange-500 hover:bg-orange-600 text-white mb-8">
            <MessageCircle className="h-4 w-4 mr-2" />
            Ajukan Pertanyaan Baru
          </Button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{faq.votes}</span>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {expandedFaq === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Helpful</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      Share
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tidak menemukan jawaban yang Anda cari?
          </h3>
          <p className="text-gray-600 mb-4">
            Hubungi tim support kami untuk bantuan lebih lanjut
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Hubungi Support
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default TanyaJawab;
