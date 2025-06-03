
const ProgramSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Sejarah Ini</h2>
      
      <div className="bg-blue-900 text-white p-6 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">890</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">590</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">900</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">590</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">495</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">290</div>
            <div className="text-sm opacity-80">Ribu</div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-4">Manfaat Paket</h3>
        <div className="flex items-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-sm text-gray-600">
              Kartu Prakerja sangat bermanfaat, masa dapat jalani lagi untuk memahami skill basic design dan advanced yang seharusnya bisa berguna untuk kehidupan sehari-hari pada umumnya.
            </p>
            <div className="text-xs text-gray-500 mt-1">
              Rizki Ramadhan, Jakarta Pusat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
