
import { Play, Download, Shield, Lock, Zap, Users, Clock, Star, Award, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Video Demo Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop"
            alt="CyberGuard Demo Video"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
              <Play className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
            Demo CyberGuard<br />5 Menit
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Lihat CyberGuard Beraksi</h3>
          <p className="text-sm text-gray-600 mb-3">
            Tonton demo singkat bagaimana CyberGuard melindungi sistem Anda
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Tonton Demo
          </Button>
        </div>
      </div>

      {/* Quick Features */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Fitur Utama</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <Shield className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Antivirus Real-time</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
              <Lock className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Firewall Advanced</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
              <Zap className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Performance Booster</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
              <Users className="h-4 w-4 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Family Protection</span>
          </div>
        </div>
      </div>

      {/* Download CTA */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Mulai Sekarang!</h3>
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=150&fit=crop"
          alt="Secure your system"
          className="w-full h-32 object-cover rounded mb-3"
        />
        <p className="text-sm text-gray-600 mb-3">
          Dapatkan perlindungan terbaik untuk sistem Anda. Trial gratis 30 hari!
        </p>
        <Link to="/download">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium flex items-center justify-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Gratis</span>
          </Button>
        </Link>
      </div>

      {/* Support */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Butuh Bantuan?</h3>
        <div className="space-y-2 text-sm">
          <Link to="/support" className="block text-blue-600 hover:text-blue-800">
            📞 Hubungi Support
          </Link>
          <Link to="/support" className="block text-blue-600 hover:text-blue-800">
            💬 Live Chat 24/7
          </Link>
          <Link to="/support" className="block text-blue-600 hover:text-blue-800">
            📖 Knowledge Base
          </Link>
        </div>
      </div>

      {/* System Requirements */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Sistem Requirements</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Windows 10/11</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>RAM 4GB minimum</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Storage 2GB free</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Internet connection</span>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Berita Terbaru</h3>
        <div className="space-y-3">
          <div className="border-b pb-2">
            <h4 className="text-sm font-medium text-gray-700">Update Keamanan v5.2</h4>
            <p className="text-xs text-gray-500">Perlindungan terhadap ransomware terbaru</p>
            <span className="text-xs text-blue-600">2 hari lalu</span>
          </div>
          <div className="border-b pb-2">
            <h4 className="text-sm font-medium text-gray-700">AI Detection Enhanced</h4>
            <p className="text-xs text-gray-500">Deteksi malware dengan AI terbaru</p>
            <span className="text-xs text-blue-600">1 minggu lalu</span>
          </div>
        </div>
        <Link to="/news" className="text-xs text-blue-600 hover:text-blue-800 mt-2 block">
          Lihat semua berita →
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-4 text-white">
        <h3 className="font-semibold mb-3">CyberGuard Stats</h3>
        <div className="grid grid-cols-2 gap-3 text-center">
          <div>
            <div className="text-lg font-bold">99.9%</div>
            <div className="text-xs opacity-90">Detection Rate</div>
          </div>
          <div>
            <div className="text-lg font-bold">24/7</div>
            <div className="text-xs opacity-90">Monitoring</div>
          </div>
          <div>
            <div className="text-lg font-bold">10M+</div>
            <div className="text-xs opacity-90">Users</div>
          </div>
          <div>
            <div className="text-lg font-bold">150+</div>
            <div className="text-xs opacity-90">Countries</div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Penghargaan</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-yellow-500" />
            <span className="text-xs text-gray-600">VB100 Award 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-xs text-gray-600">PC Magazine Editor's Choice</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="text-xs text-gray-600">AV-TEST Best Protection</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Kontak Kami</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <Headphones className="h-3 w-3" />
            <span>+62 21 1234 5678</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>Senin - Jumat: 08:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
