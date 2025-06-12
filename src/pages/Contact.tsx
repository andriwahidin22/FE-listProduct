
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih! Tim kami akan menghubungi Anda dalam 24 jam.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Jl. Sudirman No. 123",
        "Jakarta Pusat 10220",
        "Indonesia"
      ]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: [
        "+62 21 1234 5678",
        "+62 21 1234 5679 (Fax)",
        "0800-1-CYBER (Emergency)"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@cyberguard.com",
        "support@cyberguard.com",
        "sales@cyberguard.com"
      ]
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 09:00 - 18:00",
        "Sabtu: 09:00 - 14:00",
        "Support 24/7 tersedia"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ada pertanyaan atau butuh bantuan? Tim ahli kami siap membantu Anda 
              menemukan solusi keamanan yang tepat
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Kirim Pesan</CardTitle>
                <CardDescription className="text-blue-100">
                  Isi form dibawah ini dan kami akan menghubungi Anda segera
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Perusahaan
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder="Nama perusahaan (opsional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Subjek *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder="Topik pertanyaan Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Jelaskan pertanyaan atau kebutuhan Anda..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h2>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm text-blue-100">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Map Placeholder */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-orange-400" />
                      <h3 className="text-lg font-semibold mb-2">Lokasi Kantor</h3>
                      <p className="text-blue-100">Jakarta Pusat, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Butuh Bantuan Cepat?</h2>
            <p className="text-blue-100 mb-6">
              Lihat jawaban untuk pertanyaan yang sering ditanyakan atau hubungi support langsung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Lihat FAQ
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
