
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Pengguna Aktif", value: "10M+", icon: Users },
    { label: "Negara", value: "50+", icon: Globe },
    { label: "Ancaman Terdeteksi", value: "1B+", icon: Shield },
    { label: "Pertumbuhan YoY", value: "150%", icon: TrendingUp }
  ];

  const team = [
    {
      name: "Dr. Ahmad Rizki",
      role: "CEO & Founder",
      experience: "15+ tahun di cybersecurity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Wijaya",
      role: "CTO",
      experience: "12+ tahun di tech development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c9be?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Security",
      experience: "10+ tahun di threat intelligence",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Keamanan Utama",
      description: "Kami menempatkan keamanan sebagai prioritas utama dalam setiap produk dan layanan"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Kepuasan dan kepercayaan pelanggan adalah fondasi dari semua yang kami lakukan"
    },
    {
      icon: Award,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi dengan teknologi terdepan untuk menghadapi ancaman cyber"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Berkomitmen memberikan kualitas terbaik dalam setiap aspek bisnis kami"
    }
  ];

  return (
    <Layout showHero={true}>
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-sm text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang CyberGuard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Melindungi dunia digital dengan solusi keamanan siber terdepan. 
              Dipercaya oleh jutaan pengguna di seluruh dunia sejak 2015.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center text-white">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Story */}
          <div className="mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Cerita Kami</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="text-blue-100 space-y-6">
                  <p>
                    CyberGuard didirikan pada tahun 2015 dengan misi sederhana namun ambisius: membuat internet 
                    menjadi tempat yang lebih aman untuk semua orang. Dimulai dari sebuah startup kecil di Jakarta, 
                    kami telah berkembang menjadi salah satu penyedia solusi keamanan siber terkemuka di Asia Tenggara.
                  </p>
                  <p>
                    Dengan tim yang terdiri dari para ahli cybersecurity, engineer berpengalaman, dan peneliti 
                    keamanan, kami terus berinovasi menghadapi ancaman siber yang semakin kompleks. Produk-produk 
                    kami telah melindungi jutaan perangkat dan membantu organisasi dari berbagai skala.
                  </p>
                  <p>
                    Hari ini, CyberGuard bangga melayani lebih dari 10 juta pengguna di 50+ negara, dengan 
                    komitmen yang sama: memberikan perlindungan terbaik dengan teknologi yang mudah digunakan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center text-white hover:bg-white/20 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-orange-400" />
                      </div>
                      <CardTitle className="text-lg text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-100">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Tim Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center text-white hover:bg-white/20 transition-all">
                  <CardHeader>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                    <CardDescription className="text-orange-400 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-100">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Penghargaan & Sertifikasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Best Cybersecurity Solution 2023</h3>
                    <p className="text-sm text-blue-100">Indonesia ICT Awards</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">ISO 27001 Certified</h3>
                    <p className="text-sm text-blue-100">Information Security Management</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Top Employer 2023</h3>
                    <p className="text-sm text-blue-100">Great Place to Work Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Bergabung dengan Misi Kami</h2>
            <p className="text-lg opacity-90 mb-6">
              Ingin menjadi bagian dari tim yang melindungi dunia digital? Kami selalu mencari talenta terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Lihat Karir
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 px-8 py-3">
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
