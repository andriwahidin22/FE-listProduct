
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Building, Users } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      phone: "+62 21 1234 5678",
      email: "jakarta@cyberguard.com",
      type: "Kantor Pusat"
    },
    {
      city: "Surabaya",
      address: "Jl. Basuki Rachmat No. 45, Surabaya 60271",
      phone: "+62 31 8765 4321",
      email: "surabaya@cyberguard.com",
      type: "Kantor Cabang"
    },
    {
      city: "Bandung",
      address: "Jl. Asia Afrika No. 67, Bandung 40111",
      phone: "+62 22 9876 5432",
      email: "bandung@cyberguard.com",
      type: "Kantor Cabang"
    }
  ];

  const contactTypes = [
    {
      icon: Building,
      title: "Sales & Partnership",
      description: "Informasi produk, harga, dan kemitraan bisnis",
      email: "sales@cyberguard.com",
      phone: "+62 21 SALES-01"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Bantuan teknis dan support pengguna",
      email: "support@cyberguard.com",
      phone: "+62 21 SUPPORT"
    },
    {
      icon: Mail,
      title: "Media & Press",
      description: "Pertanyaan media dan siaran pers",
      email: "press@cyberguard.com",
      phone: "+62 21 MEDIA-01"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi CyberGuard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Kami siap membantu Anda dengan pertanyaan, konsultasi, atau kebutuhan 
              keamanan siber apa pun. Tim expert kami tersedia 24/7
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="email@domain.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <Input placeholder="+62 xxx xxxx xxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <Input placeholder="Nama perusahaan" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Pilih subjek...</option>
                    <option>Pertanyaan Produk</option>
                    <option>Technical Support</option>
                    <option>Sales & Pricing</option>
                    <option>Partnership</option>
                    <option>Media Inquiry</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={5}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <span>Jam Operasional</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support 24/7</span>
                      <span className="font-semibold">Selalu Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales (Senin-Jumat)</span>
                      <span className="font-semibold">08:00 - 18:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales (Weekend)</span>
                      <span className="font-semibold">09:00 - 15:00 WIB</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Types */}
              {contactTypes.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-teal-600" />
                        </div>
                        <span>{contact.title}</span>
                      </CardTitle>
                      <CardDescription>{contact.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-blue-600">{contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-blue-600">{contact.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Lokasi Kantor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{office.city}</CardTitle>
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 text-xs rounded-full">
                        {office.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <span className="text-gray-600 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-blue-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-blue-600">{office.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Temukan Kami</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Peta lokasi kantor CyberGuard</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Kontak Darurat</h2>
            <p className="text-lg opacity-90 mb-6">
              Untuk situasi darurat keamanan siber atau insiden kritis, hubungi tim emergency kami segera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                🚨 Emergency: +62 21 911-CYBER
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Emergency Email: emergency@cyberguard.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
