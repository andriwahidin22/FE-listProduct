
import { Shield, Users, Award, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mengapa Memilih CyberGuard?</h2>
      
      <div className="text-gray-600 space-y-4 mb-8">
        <p>
          CyberGuard adalah solusi keamanan siber terdepan yang telah dipercaya oleh lebih dari 50,000 perusahaan di seluruh dunia. 
          Kami menyediakan perlindungan komprehensif terhadap semua jenis ancaman digital modern.
        </p>
        
        <p>
          Dengan teknologi AI dan machine learning terdepan, CyberGuard mampu mendeteksi dan mencegah ancaman zero-day 
          serta serangan siber yang paling canggih sekalipun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">99.9%</h3>
          <p className="text-sm text-gray-600">Tingkat Deteksi Malware</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
          <p className="text-sm text-gray-600">Perusahaan Terlindungi</p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">15+</h3>
          <p className="text-sm text-gray-600">Penghargaan Industri</p>
        </div>
        <div className="text-center p-6 bg-orange-50 rounded-lg">
          <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
          <p className="text-sm text-gray-600">Support Teknis</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            i
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Sertifikasi Internasional
            </h3>
            <p className="text-gray-600 text-sm">
              CyberGuard telah tersertifikasi ISO 27001, SOC 2 Type II, dan memenuhi standar keamanan internasional tertinggi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
