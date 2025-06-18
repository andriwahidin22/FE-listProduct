
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, MapPin, Users, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventType: '',
    description: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    expectedParticipants: '',
    budget: '',
    requesterName: '',
    requesterEmail: '',
    department: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      toast({
        title: 'Pengajuan Event Berhasil!',
        description: 'Pengajuan event Anda telah dikirim dan akan direview oleh atasan.',
      });
      
      // Reset form
      setFormData({
        eventTitle: '',
        eventType: '',
        description: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        location: '',
        expectedParticipants: '',
        budget: '',
        requesterName: '',
        requesterEmail: '',
        department: '',
        additionalNotes: ''
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sistem Pengajuan Event & Kegiatan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform untuk mengajukan event dan kegiatan dengan sistem approval terintegrasi
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                <p className="text-gray-600">Event Disetujui</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">24 Jam</h3>
                <p className="text-gray-600">Rata-rata Approval</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Partner Aktif</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Tingkat Persetujuan</p>
              </CardContent>
            </Card>
          </div>

          {/* Event Submission Form */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ajukan Event / Kegiatan Baru</CardTitle>
              <CardDescription className="text-center">
                Isi form di bawah ini untuk mengajukan event. Pengajuan akan dikirim ke email atasan untuk approval.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Event Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Event *
                    </label>
                    <Input
                      value={formData.eventTitle}
                      onChange={(e) => setFormData({...formData, eventTitle: e.target.value})}
                      placeholder="Masukkan nama event"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Event *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Pilih jenis event</option>
                      <option value="seminar">Seminar</option>
                      <option value="workshop">Workshop</option>
                      <option value="pelatihan">Pelatihan</option>
                      <option value="konferensi">Konferensi</option>
                      <option value="rapat">Rapat</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Event *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Jelaskan detail event, tujuan, dan agenda"
                    rows={4}
                    required
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Mulai *
                    </label>
                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Selesai *
                    </label>
                    <Input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Waktu Mulai *
                    </label>
                    <Input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Waktu Selesai *
                    </label>
                    <Input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Location and Participants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokasi *
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Alamat atau tempat event"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perkiraan Peserta *
                    </label>
                    <Input
                      type="number"
                      value={formData.expectedParticipants}
                      onChange={(e) => setFormData({...formData, expectedParticipants: e.target.value})}
                      placeholder="Jumlah peserta"
                      required
                    />
                  </div>
                </div>

                {/* Requester Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Pengaju *
                    </label>
                    <Input
                      value={formData.requesterName}
                      onChange={(e) => setFormData({...formData, requesterName: e.target.value})}
                      placeholder="Nama lengkap"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.requesterEmail}
                      onChange={(e) => setFormData({...formData, requesterEmail: e.target.value})}
                      placeholder="email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departemen *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Pilih departemen</option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Partner">Partner</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimasi Budget
                  </label>
                  <Input
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="Rp. 0 (opsional)"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan Tambahan
                  </label>
                  <Textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                    placeholder="Informasi tambahan yang perlu diketahui"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Ajukan Event
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
