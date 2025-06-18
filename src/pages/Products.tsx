
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Workshop Cybersecurity 2024',
      type: 'Workshop',
      date: '15 Februari 2024',
      time: '09:00 - 17:00',
      location: 'Ruang Seminar A',
      participants: 50,
      status: 'approved',
      department: 'IT',
      requester: 'Ahmad Rahman'
    },
    {
      id: 2,
      title: 'Team Building Engineering',
      type: 'Team Building',
      date: '20-21 Februari 2024',
      time: '08:00 - 18:00',
      location: 'Villa Puncak, Bogor',
      participants: 30,
      status: 'approved',
      department: 'Engineering',
      requester: 'Sari Indah'
    },
    {
      id: 3,
      title: 'Seminar Digital Marketing',
      type: 'Seminar',
      date: '10 Februari 2024',
      time: '13:00 - 16:00',
      location: 'Auditorium',
      participants: 100,
      status: 'scheduled',
      department: 'Marketing',
      requester: 'Budi Santoso'
    },
    {
      id: 4,
      title: 'Pelatihan Project Management',
      type: 'Pelatihan',
      date: '25 Februari 2024',
      time: '09:00 - 16:00',
      location: 'Ruang Training B',
      participants: 25,
      status: 'approved',
      department: 'HR',
      requester: 'Linda Sari'
    },
    {
      id: 5,
      title: 'Konferensi Teknologi 2024',
      type: 'Konferensi',
      date: '1-2 Maret 2024',
      time: '08:00 - 17:00',
      location: 'Jakarta Convention Center',
      participants: 500,
      status: 'scheduled',
      department: 'IT',
      requester: 'Andi Pratama'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 border-green-300">Disetujui</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Terjadwal</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-300">{status}</Badge>;
    }
  };

  const filteredEvents = filterStatus === 'all' 
    ? events 
    : events.filter(event => event.status === filterStatus);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Jadwal Event & Kegiatan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daftar event dan kegiatan yang telah disetujui dan terjadwal
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <Button
                onClick={() => setFilterStatus('all')}
                variant={filterStatus === 'all' ? 'default' : 'ghost'}
                size="sm"
              >
                <Filter className="h-4 w-4 mr-1" />
                Semua
              </Button>
              <Button
                onClick={() => setFilterStatus('approved')}
                variant={filterStatus === 'approved' ? 'default' : 'ghost'}
                size="sm"
              >
                Disetujui
              </Button>
              <Button
                onClick={() => setFilterStatus('scheduled')}
                variant={filterStatus === 'scheduled' ? 'default' : 'ghost'}
                size="sm"
              >
                Terjadwal
              </Button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    {getStatusBadge(event.status)}
                  </div>
                  <CardDescription className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {event.type}
                    </span>
                    <span className="ml-2 text-gray-500">{event.department}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.participants} peserta</span>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      Diajukan oleh: <span className="font-medium">{event.requester}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada event dengan status "{filterStatus === 'all' ? 'semua' : filterStatus}"
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
