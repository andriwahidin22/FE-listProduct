
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Clock, HeadphonesIcon, Users } from "lucide-react";

const Support = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim support CyberGuard siap membantu Anda 24/7. Dapatkan bantuan teknis dan konsultasi keamanan dari ahli kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Telepon</CardTitle>
                <CardDescription>Hubungi hotline 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">0804-1-CYBER</p>
                <p className="text-sm text-gray-600">Gratis dari seluruh Indonesia</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Kirim pertanyaan detail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 mb-2">support@cyberguard.co.id</p>
                <p className="text-sm text-gray-600">Respon dalam 2 jam</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat langsung dengan agent</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Mulai Chat
                </Button>
                <p className="text-sm text-gray-600 mt-2">Online 24/7</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Isi form di bawah untuk mendapatkan bantuan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Nama Lengkap" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Subjek" />
                <Textarea placeholder="Jelaskan masalah Anda..." rows={5} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <HeadphonesIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <CardTitle className="text-lg">Remote Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Teknisi kami dapat mengakses komputer Anda secara remote untuk menyelesaikan masalah dengan cepat.
                  </p>
                  <Button variant="outline" className="w-full">
                    Request Remote Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 text-indigo-600 mb-2" />
                  <CardTitle className="text-lg">Training & Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Pelatihan penggunaan produk dan konsultasi keamanan untuk tim IT Anda.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Training
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
