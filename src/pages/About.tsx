
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Globe, Target, Eye } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Ahmad Prasetyo",
      role: "CEO & Founder",
      description: "15 tahun pengalaman di industri cybersecurity"
    },
    {
      name: "Sarah Wijaya",
      role: "CTO",
      description: "Expert dalam AI dan machine learning security"
    },
    {
      name: "Michael Chen",
      role: "Head of Research",
      description: "Spesialis dalam threat intelligence dan malware analysis"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang CyberGuard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Melindungi bisnis Indonesia dari ancaman siber sejak 2015 dengan teknologi terdepan dan inovasi berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Perlindungan Maksimal</h3>
                    <p className="text-gray-600">
                      Memberikan solusi keamanan siber terbaik untuk melindungi aset digital perusahaan dan individu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visi Masa Depan</h3>
                    <p className="text-gray-600">
                      Menjadi pemimpin industri keamanan siber di Asia Tenggara dengan inovasi teknologi AI terdepan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Keunggulan Teknologi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI-powered threat detection</li>
                    <li>• Machine learning behavioral analysis</li>
                    <li>• Real-time security monitoring</li>
                    <li>• Cloud-based protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-yellow-600 mb-2" />
                  <CardTitle>Sertifikasi & Penghargaan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ISO 27001:2013 Certified</li>
                    <li>• SOC 2 Type II Compliant</li>
                    <li>• Best Cybersecurity Company 2023</li>
                    <li>• Top Innovation Award 2022</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tim Kepemimpinan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg p-8 text-white text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Jangkauan Global</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Melayani lebih dari 50,000 perusahaan di 25 negara dengan kantor regional di Jakarta, Singapura, dan Sydney. 
              Komitmen kami adalah memberikan perlindungan keamanan siber terbaik di dunia.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
