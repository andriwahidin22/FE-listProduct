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
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
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
                className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-blue-200 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-white">
                    <div className={`h-2 bg-gradient-to-r ${channel.gradient}`}></div>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${channel.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{channel.title}</CardTitle>
                      <CardDescription className="text-blue-100">{channel.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="font-semibold text-white">Kontak:</span>
                          <p className="text-orange-400">{channel.contact}</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-sm text-blue-100">Availability:</span>
                            <p className="font-semibold text-white">{channel.availability}</p>
                          </div>
                          <div>
                            <span className="text-sm text-blue-100">Response:</span>
                            <p className="font-semibold text-white">{channel.responseTime}</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all text-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8 py-3 border-white/20 text-white hover:bg-white/10">
                Lihat Semua FAQ
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Sumber Daya Bantuan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-center text-white">
                    <CardHeader>
                      <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-orange-400" />
                      </div>
                      <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
                      <CardDescription className="text-blue-100">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={resource.link}>
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
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
          <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-red-400/20">
            <h2 className="text-3xl font-bold mb-4">Bantuan Darurat</h2>
            <p className="text-lg opacity-90 mb-6">
              Mengalami serangan siber atau masalah keamanan kritik? Hubungi tim emergency kami segera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                🚨 Emergency Hotline: +62 21 911-CYBER
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
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
