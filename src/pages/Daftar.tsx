
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Check } from "lucide-react";

const Daftar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    nik: "",
    birthDate: "",
    gender: "",
    education: "",
    workStatus: "",
    address: "",
    province: "",
    city: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.phone || !formData.fullName || !formData.nik) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Error",
        description: "Anda harus menyetujui syarat dan ketentuan",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pendaftaran Berhasil!",
      description: "Kami akan mengirimkan informasi selanjutnya melalui email Anda",
    });

    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const requirements = [
    "WNI berusia 18 tahun ke atas",
    "Tidak sedang menempuh pendidikan formal",
    "Sedang mencari kerja atau membutuhkan peningkatan kompetensi",
    "Bukan PNS, TNI, Polri, atau pejabat negara",
    "Maksimal 2 NIK dalam 1 KK"
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Daftar Kartu Prakerja</h1>
          <p className="text-lg text-gray-600">
            Lengkapi form pendaftaran untuk mengikuti Program Kartu Prakerja
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor HP *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="08123456789"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="fullName">Nama Lengkap *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Masukkan nama lengkap sesuai KTP"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nik">NIK *</Label>
                    <Input
                      id="nik"
                      type="text"
                      value={formData.nik}
                      onChange={(e) => handleInputChange("nik", e.target.value)}
                      placeholder="16 digit NIK"
                      maxLength={16}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Tanggal Lahir</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">Jenis Kelamin</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laki-laki">Laki-laki</SelectItem>
                        <SelectItem value="perempuan">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="education">Pendidikan Terakhir</Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sd">SD</SelectItem>
                        <SelectItem value="smp">SMP</SelectItem>
                        <SelectItem value="sma">SMA/SMK</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="sarjana">Sarjana</SelectItem>
                        <SelectItem value="pascasarjana">Pascasarjana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="workStatus">Status Pekerjaan</Label>
                  <Select value={formData.workStatus} onValueChange={(value) => handleInputChange("workStatus", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status pekerjaan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mencari-kerja">Sedang mencari kerja</SelectItem>
                      <SelectItem value="kena-phk">Terkena PHK</SelectItem>
                      <SelectItem value="butuh-peningkatan">Membutuhkan peningkatan kompetensi</SelectItem>
                      <SelectItem value="pekerja-terdampak">Pekerja terdampak COVID-19</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="province">Provinsi</Label>
                    <Select value={formData.province} onValueChange={(value) => handleInputChange("province", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih provinsi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jakarta">DKI Jakarta</SelectItem>
                        <SelectItem value="jabar">Jawa Barat</SelectItem>
                        <SelectItem value="jateng">Jawa Tengah</SelectItem>
                        <SelectItem value="jatim">Jawa Timur</SelectItem>
                        <SelectItem value="sumut">Sumatera Utara</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">Kota/Kabupaten</Label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jakarta-pusat">Jakarta Pusat</SelectItem>
                        <SelectItem value="bandung">Bandung</SelectItem>
                        <SelectItem value="surabaya">Surabaya</SelectItem>
                        <SelectItem value="medan">Medan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                    Saya menyetujui <a href="#" className="text-blue-600 hover:underline">syarat dan ketentuan</a> serta 
                    <a href="#" className="text-blue-600 hover:underline"> kebijakan privasi</a> Program Kartu Prakerja
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Daftar Sekarang
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Syarat Pendaftaran</h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="bg-green-500 rounded-full p-1 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Bantuan Pendaftaran</h3>
              <p className="text-sm text-gray-600 mb-4">
                Butuh bantuan dalam proses pendaftaran? Hubungi customer service kami.
              </p>
              <Button variant="outline" className="w-full">
                Hubungi CS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Daftar;
