
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Shield, Check, Smartphone, Laptop, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DownloadPage = () => {
  const [email, setEmail] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("windows");
  const { toast } = useToast();

  const handleDownload = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Mohon masukkan email Anda untuk melanjutkan download",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Download Dimulai",
      description: "File installer sedang didownload. Periksa folder Downloads Anda.",
    });
  };

  const platforms = [
    { id: "windows", name: "Windows", icon: <Laptop className="h-6 w-6" />, size: "152 MB" },
    { id: "mac", name: "macOS", icon: <Laptop className="h-6 w-6" />, size: "198 MB" },
    { id: "android", name: "Android", icon: <Smartphone className="h-6 w-6" />, size: "45 MB" },
    { id: "ios", name: "iOS", icon: <Smartphone className="h-6 w-6" />, size: "67 MB" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Download className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Download CyberGuard</h1>
            <p className="text-xl text-gray-600">
              Mulai trial gratis 30 hari dan rasakan perlindungan terbaik untuk sistem Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Download Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Download Installer</span>
                </CardTitle>
                <CardDescription>
                  Pilih platform dan masukkan email untuk download
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Pilih Platform:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`p-3 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                          selectedPlatform === platform.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {platform.icon}
                        <span className="text-sm font-medium">{platform.name}</span>
                        <span className="text-xs text-gray-500">{platform.size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address:
                  </label>
                  <Input
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button 
                  onClick={handleDownload}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CyberGuard
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Dengan mendownload, Anda menyetujui <a href="#" className="text-blue-600">Terms of Service</a> kami
                </p>
              </CardContent>
            </Card>

            {/* Features Included */}
            <Card>
              <CardHeader>
                <CardTitle>Yang Anda Dapatkan</CardTitle>
                <CardDescription>
                  Trial gratis 30 hari dengan fitur lengkap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Real-time antivirus protection",
                    "Advanced firewall dengan AI detection",
                    "Web dan email protection",
                    "Automatic updates dan patches",
                    "24/7 customer support",
                    "VPN terintegrasi (1GB/bulan)",
                    "Password manager basic",
                    "Performance optimization tools"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* System Requirements */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Windows</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Windows 10/11 (64-bit)</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 2 GB storage space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">macOS</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• macOS 10.15 or later</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 3 GB storage space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Download Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Web Console</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Akses dashboard keamanan melalui browser
                </p>
                <Button variant="outline" className="w-full">
                  Buka Web Console
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Mobile App</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download dari Google Play atau App Store
                </p>
                <Button variant="outline" className="w-full">
                  Ke App Store
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">MSI Package</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Untuk deployment enterprise
                </p>
                <Button variant="outline" className="w-full">
                  Download MSI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;
