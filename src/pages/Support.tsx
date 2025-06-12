
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Mail, FileText, Clock, Users, Search, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Bicara langsung dengan tim support kami",
      contact: "+62 21 1234 5678",
      availability: "24/7",
      responseTime: "Langsung",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat real-time dengan agent support",
      contact: "Chat tersedia di website",
      availability: "24/7",
      responseTime: "< 2 menit",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Kirim pertanyaan detail via email",
      contact: "support@cyberguard.com",
      availability: "24/7",
      responseTime: "< 4 jam",
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  const faqItems = [
    {
      question: "Bagaimana cara menginstall CyberGuard?",
      answer: "Download installer dari website resmi, jalankan sebagai administrator, dan ikuti wizard instalasi."
    },
    {
      question: "Apakah CyberGuard mempengaruhi performa sistem?",
      answer: "Tidak, CyberGuard menggunakan teknologi lightweight yang tidak memperlambat sistem Anda."
    },
    {
      question: "Berapa lama masa trial gratis?",
      answer: "Trial gratis berlaku selama 30 hari dengan akses penuh ke semua fitur premium."
    },
    {
      question: "Bagaimana cara memperpanjang lisensi?",
      answer: "Login ke dashboard user, pilih menu subscription, dan pilih paket perpanjangan yang diinginkan."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Ya, semua data dienkripsi end-to-end dan tidak ada data yang dikirim ke server tanpa persetujuan."
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Panduan lengkap penggunaan semua produk CyberGuard",
      link: "/docs"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Update terbaru, patch, dan installer produk",
      link: "/download"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Diskusi dengan user lain dan dapatkan tips & trik",
      link: "/forum"
    },
    {
      icon: Clock,
      title: "System Status",
      description: "Pantau status server dan layanan CyberGuard",
      link: "/status"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pusat Bantuan CyberGuard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Tim support ahli kami siap membantu Anda 24/7. Temukan jawaban, panduan, 
              dan solusi untuk semua pertanyaan Anda
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Cari bantuan, panduan, atau FAQ..."
                className="pl-12 pr-4 py-3 text-gray-800 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                    <div className={`h-2 bg-gradient-to-r ${channel.gradient}`}></div>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${channel.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{channel.title}</CardTitle>
                      <CardDescription>{channel.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="font-semibold text-gray-800">Kontak:</span>
                          <p className="text-blue-600">{channel.contact}</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-sm text-gray-600">Availability:</span>
                            <p className="font-semibold">{channel.availability}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Response:</span>
                            <p className="font-semibold">{channel.responseTime}</p>
                          </div>
                        </div>
                      </div>
                      <Button className={`w-full bg-gradient-to-r ${channel.gradient} hover:opacity-90 text-white`}>
                        Hubungi Sekarang
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8 py-3">
                Lihat Semua FAQ
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Sumber Daya Bantuan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group text-center">
                    <CardHeader>
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={resource.link}>
                        <Button variant="outline" className="w-full">
                          Akses Sekarang
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bantuan Darurat</h2>
            <p className="text-lg opacity-90 mb-6">
              Mengalami serangan siber atau masalah keamanan kritik? Hubungi tim emergency kami segera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                🚨 Emergency Hotline: +62 21 911-CYBER
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Emergency Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
