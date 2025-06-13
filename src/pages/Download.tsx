
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
    <Layout showHero={true}>
      <div className="min-h-screen text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-orange-500/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Download className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Download CyberGuard</h1>
            <p className="text-xl text-blue-100">
              Mulai trial gratis 30 hari dan rasakan perlindungan terbaik untuk sistem Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Download Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Shield className="h-6 w-6 text-orange-400" />
                  <span>Download Installer</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Pilih platform dan masukkan email untuk download
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">
                    Pilih Platform:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`p-3 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                          selectedPlatform === platform.id
                            ? 'border-orange-400 bg-orange-500/20'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                      >
                        {platform.icon}
                        <span className="text-sm font-medium text-white">{platform.name}</span>
                        <span className="text-xs text-blue-100">{platform.size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Email Address:
                  </label>
                  <Input
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white placeholder-blue-200"
                  />
                </div>

                <Button 
                  onClick={handleDownload}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CyberGuard
                </Button>

                <p className="text-xs text-blue-200 text-center">
                  Dengan mendownload, Anda menyetujui <a href="#" className="text-orange-400">Terms of Service</a> kami
                </p>
              </CardContent>
            </Card>

            {/* Features Included */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Yang Anda Dapatkan</CardTitle>
                <CardDescription className="text-blue-100">
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
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* System Requirements */}
          <Card className="mb-12 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-white">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Windows</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• Windows 10/11 (64-bit)</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 2 GB storage space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">macOS</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
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
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Web Console</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Akses dashboard keamanan melalui browser
                </p>
                <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10">
                  Buka Web Console
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Mobile App</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Download dari Google Play atau App Store
                </p>
                <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10">
                  Ke App Store
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">MSI Package</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Untuk deployment enterprise
                </p>
                <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10">
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
