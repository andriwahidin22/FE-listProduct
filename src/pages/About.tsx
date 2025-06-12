
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Globe, Award, Target, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "500K+", label: "Pengguna Aktif", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50+", label: "Negara Dilayani", icon: Globe },
    { number: "10+", label: "Tahun Pengalaman", icon: Award }
  ];

  const team = [
    {
      name: "Dr. Ahmad Cyber",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "15+ tahun pengalaman di industri cybersecurity"
    },
    {
      name: "Sarah Security",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Expert dalam AI dan machine learning security"
    },
    {
      name: "Michael Guardian",
      position: "Head of Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Peneliti senior dalam threat intelligence"
    },
    {
      name: "Lisa Defender",
      position: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Specialist dalam customer experience"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Keamanan Utama",
      description: "Keamanan adalah prioritas utama dalam setiap produk dan layanan yang kami tawarkan"
    },
    {
      icon: Eye,
      title: "Transparansi",
      description: "Kami berkomitmen untuk transparansi penuh dalam operasi dan komunikasi"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Kepuasan dan keamanan customer adalah fokus utama dalam setiap keputusan"
    },
    {
      icon: Target,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi untuk menghadapi ancaman cyber yang terus berkembang"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang CyberGuard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Melindungi dunia digital sejak 2014. Kami adalah perusahaan keamanan siber 
              terdepan yang berkomitmen memberikan perlindungan terbaik untuk individu dan bisnis
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Memberikan solusi keamanan siber yang mudah digunakan, andal, dan terjangkau 
                  untuk melindungi data dan privasi digital setiap orang. Kami berkomitmen untuk 
                  menjadi garda terdepan dalam menghadapi ancaman cyber yang terus berkembang.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perusahaan keamanan siber nomor satu di Asia Tenggara yang dipercaya 
                  oleh jutaan pengguna. Menciptakan dunia digital yang aman di mana setiap orang 
                  dapat beraktivitas online tanpa khawatir akan ancaman cyber.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Perusahaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tim Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Cerita Perusahaan</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  CyberGuard didirikan pada tahun 2014 oleh sekelompok ahli keamanan siber yang memiliki 
                  visi sama: membuat internet menjadi tempat yang lebih aman untuk semua orang. Berawal 
                  dari kantor kecil di Jakarta dengan hanya 5 orang tim, kami mulai mengembangkan solusi 
                  antivirus pertama kami.
                </p>
                <p>
                  Pada tahun 2016, kami meluncurkan produk firewall enterprise yang mendapat sambutan 
                  luar biasa dari perusahaan-perusahaan besar di Indonesia. Ini menjadi titik balik yang 
                  memungkinkan kami untuk ekspansi ke negara-negara ASEAN lainnya.
                </p>
                <p>
                  Hari ini, CyberGuard telah berkembang menjadi perusahaan dengan 200+ karyawan dan 
                  melayani lebih dari 500,000 pengguna di 50+ negara. Kami terus berinovasi dengan 
                  teknologi AI dan machine learning untuk menghadapi ancaman cyber yang semakin canggih.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Misi Kami</h2>
            <p className="text-lg opacity-90 mb-6">
              Jadilah bagian dari komunitas yang berkomitmen untuk menciptakan dunia digital yang lebih aman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                  Jelajahi Produk
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
