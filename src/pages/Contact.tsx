
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tertarik untuk melindungi bisnis Anda dengan solusi CyberGuard? Tim sales kami siap membantu Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi form berikut dan kami akan menghubungi Anda dalam 24 jam
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nama Depan" />
                    <Input placeholder="Nama Belakang" />
                  </div>
                  <Input placeholder="Email Perusahaan" type="email" />
                  <Input placeholder="Nomor Telepon" />
                  <Input placeholder="Nama Perusahaan" />
                  <Input placeholder="Ukuran Perusahaan (jumlah karyawan)" />
                  <Textarea 
                    placeholder="Ceritakan tentang kebutuhan keamanan siber perusahaan Anda..." 
                    rows={4} 
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Kirim Pesan
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                  <CardTitle>Kantor Pusat Jakarta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Menara Cyber, Lantai 25<br />
                    Jl. Jenderal Sudirman No. 123<br />
                    Jakarta Pusat 10270
                  </p>
                  <p className="text-sm text-gray-500">
                    Buka: Senin - Jumat, 08:00 - 17:00 WIB
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-6 w-6 text-green-600 mb-2" />
                  <CardTitle>Kontak Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>Telepon:</strong> +62 21 5555-7777<br />
                    <strong>WhatsApp:</strong> +62 812-3456-7890<br />
                    <strong>Email:</strong> sales@cyberguard.co.id
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="h-6 w-6 text-purple-600 mb-2" />
                  <CardTitle>Partnership & Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Untuk kerjasama enterprise dan partnership:<br />
                    <strong>Email:</strong> enterprise@cyberguard.co.id<br />
                    <strong>Telepon:</strong> +62 21 5555-8888
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-6 w-6 text-orange-600 mb-2" />
                  <CardTitle>Demo Produk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Jadwalkan demo produk gratis dengan tim technical sales kami.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kantor Regional</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Surabaya</h3>
                <p className="text-sm text-gray-600">
                  Graha Cyber Lt. 15<br />
                  Jl. Pemuda No. 45<br />
                  Surabaya 60271
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Bandung</h3>
                <p className="text-sm text-gray-600">
                  Cyber Center Lt. 8<br />
                  Jl. Asia Afrika No. 88<br />
                  Bandung 40112
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Medan</h3>
                <p className="text-sm text-gray-600">
                  Security Plaza Lt. 12<br />
                  Jl. Gatot Subroto No. 67<br />
                  Medan 20234
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
