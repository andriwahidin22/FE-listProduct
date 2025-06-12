
const ProgramSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Statistik Perlindungan Global</h2>
      
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-lg mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">1.2M</div>
            <div className="text-sm opacity-80">Ancaman Diblokir/Hari</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm opacity-80">Perusahaan Dilindungi</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm opacity-80">Tingkat Deteksi</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-80">Monitoring</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Testimoni Pelanggan</h3>
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-gray-600 mb-2">
                "CyberGuard telah melindungi infrastruktur IT perusahaan kami selama 3 tahun. 
                Zero incident dan performa sistem tetap optimal."
              </p>
              <div className="text-xs text-gray-500">
                Budi Santoso, IT Manager - PT Teknologi Maju
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Sertifikasi & Partner</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Microsoft Gold Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>VB100 Award Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
