
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const RequirementsSection = () => {
  const features = [
    "Perlindungan Real-time terhadap virus, malware, ransomware, dan spyware",
    "Firewall advanced dengan AI-powered threat detection",
    "Web protection untuk browsing yang aman",
    "Email security dengan anti-phishing protection",
    "Backup otomatis dan recovery system",
    "VPN terintegrasi untuk koneksi yang aman",
    "Parental control untuk keamanan keluarga",
    "Performance optimization tanpa mengurangi kecepatan sistem"
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fitur Unggulan CyberGuard</h2>
        <Link to="/download">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Download Sekarang
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-green-500 rounded-full p-1 mt-0.5">
              <Check className="h-3 w-3 text-white" />
            </div>
            <p className="text-gray-600 flex-1">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-4">Sistem Requirement Minimum</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Windows:</strong> Windows 10/11 (64-bit)<br />
            <strong>RAM:</strong> 4 GB minimum<br />
            <strong>Storage:</strong> 2 GB ruang kosong
          </div>
          <div>
            <strong>macOS:</strong> macOS 10.15 atau lebih baru<br />
            <strong>Mobile:</strong> iOS 13+ / Android 8+<br />
            <strong>Koneksi:</strong> Internet untuk update real-time
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
