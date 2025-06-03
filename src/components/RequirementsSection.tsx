
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    "WNI berusia 18 tahun ke atas.",
    "Tidak sedang menempuh pendidikan formal.",
    "Sedang mencari kerja, pekerja/buruh yang terkena PHK, atau pekerja/buruh yang membutuhkan peningkatan kompetensi kerja, seperti pekerja/buruh yang diruamahkan dan pekerja bukan penerima upah yang terdampak pandemi COVID-19.",
    "Bukan Pegawai Negeri, Program dan Anggota DPRD, ASN, Pajak TNI, Angkatan Polri, Kepala Desa dan perangkat desa dan Direktur/Komisaris/Dewan Pengawas pada BUMN atau BUMD.",
    "Maksimal 2 NIK dalam 1 KK yang menjadi Penerima Kartu Prakerja."
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Syarat Mendaftar</h2>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Daftar Sekarang
        </Button>
      </div>

      <div className="space-y-4">
        {requirements.map((requirement, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-green-500 rounded-full p-1 mt-0.5">
              <Check className="h-3 w-3 text-white" />
            </div>
            <p className="text-gray-600 flex-1">{requirement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RequirementsSection;
