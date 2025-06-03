
const AboutSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Kartu Prakerja</h2>
      
      <div className="text-gray-600 space-y-4">
        <p>
          Program Kartu Prakerja adalah program pengembangan kompetensi kerja yang ditujukan untuk pencari kerja, pekerja/buruh yang terkena pemutusan hubungan kerja, dan/atau pekerja/buruh yang membutuhkan peningkatan kompetensi.
        </p>
        
        <div className="mt-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Pelajari Lebih Lanjut →
          </a>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            i
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Program Kartu Prakerja merupakan program vokasi digital
            </h3>
            <p className="text-gray-600 text-sm">
              Bukan pendidikan atau yang tidak meningkatkan kompetensi kerja bagi penerima Program Kartu Prakerja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
