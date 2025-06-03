
import { Play } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Video Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop"
            alt="Video thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
              <Play className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
            7 Tahap Program<br />Kartu Prakerja
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Langkah Mudah Kartu Prakerja</h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {Array.from({length: 6}, (_, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mb-1 mx-auto">
                  <span className="text-blue-600 font-medium">{i + 1}</span>
                </div>
                <div className="text-gray-600 text-xs">Step {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Mitra Kartu Prakerja</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 text-xs font-medium">TK</span>
            </div>
            <span className="text-sm text-gray-600">Tokopedia</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
              <span className="text-green-600 text-xs font-medium">SK</span>
            </div>
            <span className="text-sm text-gray-600">Skill Academy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-purple-600 text-xs font-medium">CK</span>
            </div>
            <span className="text-sm text-gray-600">Course-Net</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Tunggu apa lagi?</h3>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=150&fit=crop"
          alt="CTA image"
          className="w-full h-32 object-cover rounded mb-3"
        />
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
