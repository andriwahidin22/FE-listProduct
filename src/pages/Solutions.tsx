
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/id';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Set locale to Indonesian
moment.locale('id');
const localizer = momentLocalizer(moment);

const Solutions = () => {
  const events = [
    {
      id: 1,
      title: 'Workshop Cybersecurity 2024',
      start: new Date(2024, 1, 15, 9, 0), // February 15, 2024, 9:00 AM
      end: new Date(2024, 1, 15, 17, 0),   // February 15, 2024, 5:00 PM
      resource: {
        type: 'Workshop',
        location: 'Ruang Seminar A',
        department: 'IT',
        participants: 50,
        status: 'approved'
      }
    },
    {
      id: 2,
      title: 'Team Building Engineering',
      start: new Date(2024, 1, 20, 8, 0),  // February 20, 2024, 8:00 AM
      end: new Date(2024, 1, 21, 18, 0),   // February 21, 2024, 6:00 PM
      resource: {
        type: 'Team Building',
        location: 'Villa Puncak, Bogor',
        department: 'Engineering',
        participants: 30,
        status: 'approved'
      }
    },
    {
      id: 3,
      title: 'Seminar Digital Marketing',
      start: new Date(2024, 1, 10, 13, 0), // February 10, 2024, 1:00 PM
      end: new Date(2024, 1, 10, 16, 0),   // February 10, 2024, 4:00 PM
      resource: {
        type: 'Seminar',
        location: 'Auditorium',
        department: 'Marketing',
        participants: 100,
        status: 'scheduled'
      }
    },
    {
      id: 4,
      title: 'Pelatihan Project Management',
      start: new Date(2024, 1, 25, 9, 0),  // February 25, 2024, 9:00 AM
      end: new Date(2024, 1, 25, 16, 0),   // February 25, 2024, 4:00 PM
      resource: {
        type: 'Pelatihan',
        location: 'Ruang Training B',
        department: 'HR',
        participants: 25,
        status: 'approved'
      }
    },
    {
      id: 5,
      title: 'Konferensi Teknologi 2024',
      start: new Date(2024, 2, 1, 8, 0),   // March 1, 2024, 8:00 AM
      end: new Date(2024, 2, 2, 17, 0),    // March 2, 2024, 5:00 PM
      resource: {
        type: 'Konferensi',
        location: 'Jakarta Convention Center',
        department: 'IT',
        participants: 500,
        status: 'scheduled'
      }
    }
  ];

  const eventStyleGetter = (event: any) => {
    let backgroundColor = '#3174ad';
    
    switch (event.resource.status) {
      case 'approved':
        backgroundColor = '#10b981'; // green
        break;
      case 'scheduled':
        backgroundColor = '#3b82f6'; // blue
        break;
      case 'pending':
        backgroundColor = '#f59e0b'; // yellow
        break;
      default:
        backgroundColor = '#6b7280'; // gray
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    };
  };

  const [selectedEvent, setSelectedEvent] = React.useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calendar Event & Kegiatan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tampilan calendar untuk semua event yang telah disetujui dan terjadwal
            </p>
          </div>

          {/* Legend */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">Disetujui</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm">Terjadwal</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span className="text-sm">Pending</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar Event</CardTitle>
                  <CardDescription>
                    Klik pada event untuk melihat detail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ height: '600px' }}>
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: '100%' }}
                      eventPropGetter={eventStyleGetter}
                      onSelectEvent={(event) => setSelectedEvent(event)}
                      messages={{
                        next: 'Berikutnya',
                        previous: 'Sebelumnya',
                        today: 'Hari Ini',
                        month: 'Bulan',
                        week: 'Minggu',
                        day: 'Hari',
                        agenda: 'Agenda',
                        date: 'Tanggal',
                        time: 'Waktu',
                        event: 'Event',
                        noEventsInRange: 'Tidak ada event pada periode ini',
                        showMore: (total) => `+${total} lainnya`
                      }}
                      formats={{
                        monthHeaderFormat: 'MMMM YYYY',
                        dayHeaderFormat: 'dddd, DD MMMM',
                        dayRangeHeaderFormat: ({ start, end }) =>
                          `${moment(start).format('DD MMMM')} - ${moment(end).format('DD MMMM YYYY')}`
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event Detail */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Detail Event</CardTitle>
                  <CardDescription>
                    {selectedEvent ? 'Informasi event yang dipilih' : 'Pilih event dari calendar'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedEvent ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                        <Badge className={
                          selectedEvent.resource.status === 'approved' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }>
                          {selectedEvent.resource.status === 'approved' ? 'Disetujui' : 'Terjadwal'}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Jenis:</span>
                          <span className="ml-2">{selectedEvent.resource.type}</span>
                        </div>
                        
                        <div>
                          <span className="font-medium">Tanggal:</span>
                          <span className="ml-2">
                            {moment(selectedEvent.start).format('DD MMMM YYYY')}
                            {moment(selectedEvent.start).format('DD/MM/YYYY') !== moment(selectedEvent.end).format('DD/MM/YYYY') && 
                              ` - ${moment(selectedEvent.end).format('DD MMMM YYYY')}`
                            }
                          </span>
                        </div>
                        
                        <div>
                          <span className="font-medium">Waktu:</span>
                          <span className="ml-2">
                            {moment(selectedEvent.start).format('HH:mm')} - {moment(selectedEvent.end).format('HH:mm')}
                          </span>
                        </div>
                        
                        <div>
                          <span className="font-medium">Lokasi:</span>
                          <span className="ml-2">{selectedEvent.resource.location}</span>
                        </div>
                        
                        <div>
                          <span className="font-medium">Departemen:</span>
                          <span className="ml-2">{selectedEvent.resource.department}</span>
                        </div>
                        
                        <div>
                          <span className="font-medium">Peserta:</span>
                          <span className="ml-2">{selectedEvent.resource.participants} orang</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <p>Klik pada event di calendar untuk melihat detail</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Event Mendatang</CardTitle>
                  <CardDescription>
                    Event dalam 30 hari ke depan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {events
                      .filter(event => moment(event.start).isAfter(moment()) && moment(event.start).isBefore(moment().add(30, 'days')))
                      .sort((a, b) => moment(a.start).diff(moment(b.start)))
                      .slice(0, 5)
                      .map(event => (
                        <div key={event.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{event.title}</p>
                            <p className="text-xs text-gray-600">
                              {moment(event.start).format('DD MMM, HH:mm')}
                            </p>
                          </div>
                          <Badge size="sm" className={
                            event.resource.status === 'approved' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }>
                            {event.resource.status === 'approved' ? 'Disetujui' : 'Terjadwal'}
                          </Badge>
                        </div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
