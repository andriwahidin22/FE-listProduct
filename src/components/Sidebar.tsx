
import { Play, Download, Shield, Lock, Zap, Users } from "lucide-react";
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
    </div>
  );
};

export default Sidebar;
