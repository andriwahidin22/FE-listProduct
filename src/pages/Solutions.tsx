
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Home, Smartphone, Cloud, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Enterprise Security",
      description: "Solusi keamanan komprehensif untuk perusahaan besar dengan ratusan endpoint",
      features: [
        "Centralized management console",
        "Advanced threat intelligence",
        "Compliance reporting",
        "24/7 SOC monitoring",
        "Incident response team"
      ],
      benefits: "Melindungi aset digital perusahaan dan memastikan business continuity",
      cta: "Konsultasi Enterprise"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Small Business Security",
      description: "Paket keamanan terjangkau untuk UKM dengan manajemen yang mudah",
      features: [
        "Easy setup dan konfigurasi",
        "Multi-device protection",
        "Email dan web security",
        "Remote management",
        "Cost-effective pricing"
      ],
      benefits: "Perlindungan enterprise-grade dengan budget UKM",
      cta: "Mulai Trial Bisnis"
    },
    {
      icon: <Home className="h-12 w-12 text-purple-600" />,
      title: "Home & Family",
      description: "Keamanan digital untuk keluarga modern dengan berbagai perangkat",
      features: [
        "Parental controls",
        "Safe browsing untuk anak",
        "Protection untuk IoT devices",
        "Password manager keluarga",
        "Screen time management"
      ],
      benefits: "Lindungi keluarga dari ancaman digital dan konten tidak pantas",
      cta: "Coba Gratis Keluarga"
    },
    {
      icon: <Cloud className="h-12 w-12 text-orange-600" />,
      title: "Cloud Security",
      description: "Perlindungan khusus untuk infrastruktur cloud dan hybrid environment",
      features: [
        "Multi-cloud protection",
        "Container security",
        "API security monitoring",
        "Cloud workload protection",
        "Compliance automation"
      ],
      benefits: "Amankan transformasi digital dan migrasi cloud Anda",
      cta: "Demo Cloud Security"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-red-600" />,
      title: "Mobile Device Management",
      description: "Manajemen dan keamanan untuk fleet mobile device perusahaan",
      features: [
        "Device enrollment otomatis",
        "App management",
        "Remote wipe capability",
        "Compliance monitoring",
        "BYOD policy enforcement"
      ],
      benefits: "Kontrol penuh atas mobile devices tanpa mengurangi produktivitas",
      cta: "Kelola Mobile Devices"
    },
    {
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: "Managed Security Services",
      description: "Layanan keamanan yang dikelola sepenuhnya oleh tim expert kami",
      features: [
        "24/7 security monitoring",
        "Threat hunting services",
        "Incident response",
        "Security consulting",
        "Regular security assessments"
      ],
      benefits: "Focus pada bisnis core sambil kami handle keamanan IT Anda",
      cta: "Konsultasi MSS"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Solusi Keamanan CyberGuard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan solusi keamanan yang disesuaikan dengan kebutuhan spesifik industri dan ukuran organisasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {solution.icon}
                    <div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {solution.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Manfaat:</h4>
                      <p className="text-sm text-gray-600">{solution.benefits}</p>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      {solution.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Solusi Per Industri</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">HIPAA compliant security untuk melindungi data pasien</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Financial Services</h3>
                <p className="text-sm text-gray-600">PCI DSS compliant untuk institusi keuangan</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-sm text-gray-600">FERPA compliant untuk lembaga pendidikan</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Keamanan Organisasi Anda?</h2>
            <p className="text-xl mb-6 opacity-90">
              Konsultasikan kebutuhan keamanan Anda dengan tim expert kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link to="/download">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                  Download Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
