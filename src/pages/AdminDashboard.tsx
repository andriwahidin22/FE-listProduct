
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Eye, CheckCircle, XCircle, Clock, Calendar, Users, Mail, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [approvalNote, setApprovalNote] = useState('');

  const [events, setEvents] = useState([
    {
      id: 1,
      eventTitle: 'Workshop Cybersecurity 2024',
      eventType: 'workshop',
      requesterName: 'Ahmad Rahman',
      requesterEmail: 'ahmad@company.com',
      department: 'IT',
      startDate: '2024-02-15',
      endDate: '2024-02-15',
      startTime: '09:00',
      endTime: '17:00',
      location: 'Ruang Seminar A',
      expectedParticipants: 50,
      budget: 'Rp 15.000.000',
      description: 'Workshop tentang keamanan siber untuk karyawan IT dan engineering',
      status: 'pending',
      submittedAt: '2024-01-15T10:30:00Z',
      additionalNotes: 'Mohon approval segera karena jadwal padat'
    },
    {
      id: 2,
      eventTitle: 'Team Building Engineering',
      eventType: 'lainnya',
      requesterName: 'Sari Indah',
      requesterEmail: 'sari@company.com',
      department: 'Engineering',
      startDate: '2024-02-20',
      endDate: '2024-02-21',
      startTime: '08:00',
      endTime: '18:00',
      location: 'Villa Puncak, Bogor',
      expectedParticipants: 30,
      budget: 'Rp 25.000.000',
      description: 'Kegiatan team building untuk meningkatkan kerjasama tim engineering',
      status: 'approved',
      submittedAt: '2024-01-10T14:20:00Z',
      approvedAt: '2024-01-11T09:15:00Z',
      approvedBy: 'Manager Engineering'
    },
    {
      id: 3,
      eventTitle: 'Seminar Digital Marketing',
      eventType: 'seminar',
      requesterName: 'Budi Santoso',
      requesterEmail: 'budi@company.com',
      department: 'Marketing',
      startDate: '2024-02-10',
      endDate: '2024-02-10',
      startTime: '13:00',
      endTime: '16:00',
      location: 'Auditorium',
      expectedParticipants: 100,
      budget: 'Rp 8.000.000',
      description: 'Seminar tentang tren digital marketing terbaru',
      status: 'rejected',
      submittedAt: '2024-01-12T11:45:00Z',
      rejectedAt: '2024-01-13T16:30:00Z',
      rejectedBy: 'Manager Marketing',
      rejectionReason: 'Budget tidak mencukupi untuk periode ini'
    }
  ]);

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    if (!adminAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    toast({
      title: 'Logout Berhasil',
      description: 'Anda telah keluar dari admin panel',
    });
    navigate('/admin/login');
  };

  const handleApprove = (eventId: number) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { 
            ...event, 
            status: 'approved', 
            approvedAt: new Date().toISOString(),
            approvedBy: 'Admin',
            approvalNote 
          }
        : event
    ));
    
    setSelectedEvent(null);
    setApprovalNote('');
    
    toast({
      title: 'Event Disetujui',
      description: 'Email konfirmasi telah dikirim dan event ditambahkan ke calendar',
    });
  };

  const handleReject = (eventId: number) => {
    if (!approvalNote.trim()) {
      toast({
        title: 'Alasan Diperlukan',
        description: 'Silakan berikan alasan penolakan',
        variant: 'destructive',
      });
      return;
    }

    setEvents(events.map(event => 
      event.id === eventId 
        ? { 
            ...event, 
            status: 'rejected', 
            rejectedAt: new Date().toISOString(),
            rejectedBy: 'Admin',
            rejectionReason: approvalNote 
          }
        : event
    ));
    
    setSelectedEvent(null);
    setApprovalNote('');
    
    toast({
      title: 'Event Ditolak',
      description: 'Email penolakan telah dikirim ke pengaju',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
          <Clock className="h-3 w-3 mr-1" />
          Menunggu
        </Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
          <CheckCircle className="h-3 w-3 mr-1" />
          Disetujui
        </Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
          <XCircle className="h-3 w-3 mr-1" />
          Ditolak
        </Badge>;
      default:
        return null;
    }
  };

  const pendingEvents = events.filter(e => e.status === 'pending').length;
  const approvedEvents = events.filter(e => e.status === 'approved').length;
  const rejectedEvents = events.filter(e => e.status === 'rejected').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Dashboard Approval Event</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 text-black hover:bg-white/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Menunggu Approval</CardTitle>
                <Clock className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingEvents}</div>
                <p className="text-xs text-blue-200">Event perlu direview</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Disetujui</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{approvedEvents}</div>
                <p className="text-xs text-blue-200">Event yang disetujui</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Ditolak</CardTitle>
                <XCircle className="h-4 w-4 text-red-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{rejectedEvents}</div>
                <p className="text-xs text-blue-200">Event yang ditolak</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">Total Event</CardTitle>
                <Calendar className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.length}</div>
                <p className="text-xs text-blue-200">Semua pengajuan</p>
              </CardContent>
            </Card>
          </div>

          {/* Events Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Daftar Pengajuan Event</CardTitle>
                <CardDescription className="text-blue-200">
                  Klik untuk melihat detail dan melakukan approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-blue-100">Event</TableHead>
                      <TableHead className="text-blue-100">Pengaju</TableHead>
                      <TableHead className="text-blue-100">Tanggal</TableHead>
                      <TableHead className="text-blue-100">Status</TableHead>
                      <TableHead className="text-blue-100">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="text-white">
                          <div>
                            <div className="font-medium">{event.eventTitle}</div>
                            <div className="text-sm text-blue-200">{event.eventType}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-white">
                          <div>
                            <div>{event.requesterName}</div>
                            <div className="text-sm text-blue-200">{event.department}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-white">{event.startDate}</TableCell>
                        <TableCell>{getStatusBadge(event.status)}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => setSelectedEvent(event)}
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Event Detail */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Detail Event</CardTitle>
                <CardDescription className="text-blue-200">
                  {selectedEvent ? 'Review dan berikan approval' : 'Pilih event untuk melihat detail'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedEvent ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{selectedEvent.eventTitle}</h3>
                      <p className="text-blue-200 text-sm mb-4">{selectedEvent.eventType}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-200">Pengaju:</span>
                        <p className="text-white">{selectedEvent.requesterName}</p>
                      </div>
                      <div>
                        <span className="text-blue-200">Departemen:</span>
                        <p className="text-white">{selectedEvent.department}</p>
                      </div>
                      <div>
                        <span className="text-blue-200">Tanggal:</span>
                        <p className="text-white">{selectedEvent.startDate} - {selectedEvent.endDate}</p>
                      </div>
                      <div>
                        <span className="text-blue-200">Waktu:</span>
                        <p className="text-white">{selectedEvent.startTime} - {selectedEvent.endTime}</p>
                      </div>
                      <div>
                        <span className="text-blue-200">Lokasi:</span>
                        <p className="text-white">{selectedEvent.location}</p>
                      </div>
                      <div>
                        <span className="text-blue-200">Peserta:</span>
                        <p className="text-white">{selectedEvent.expectedParticipants} orang</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-blue-200 text-sm">Budget:</span>
                      <p className="text-white font-medium">{selectedEvent.budget}</p>
                    </div>

                    <div>
                      <span className="text-blue-200 text-sm">Deskripsi:</span>
                      <p className="text-white text-sm mt-1">{selectedEvent.description}</p>
                    </div>

                    {selectedEvent.additionalNotes && (
                      <div>
                        <span className="text-blue-200 text-sm">Catatan:</span>
                        <p className="text-white text-sm mt-1">{selectedEvent.additionalNotes}</p>
                      </div>
                    )}

                    {selectedEvent.status === 'pending' && (
                      <div className="space-y-4 pt-4 border-t border-white/20">
                        <Textarea
                          placeholder="Berikan catatan approval/penolakan..."
                          value={approvalNote}
                          onChange={(e) => setApprovalNote(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                        />
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleApprove(selectedEvent.id)}
                            className="bg-green-500 hover:bg-green-600 flex-1"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Setujui
                          </Button>
                          <Button
                            onClick={() => handleReject(selectedEvent.id)}
                            className="bg-red-500 hover:bg-red-600 flex-1"
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Tolak
                          </Button>
                        </div>
                      </div>
                    )}

                    {selectedEvent.status === 'approved' && (
                      <div className="pt-4 border-t border-white/20">
                        <div className="bg-green-500/20 p-3 rounded-lg">
                          <p className="text-green-200 text-sm">
                            ✅ Disetujui pada {new Date(selectedEvent.approvedAt).toLocaleDateString('id-ID')}
                          </p>
                          {selectedEvent.approvalNote && (
                            <p className="text-white text-sm mt-1">{selectedEvent.approvalNote}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {selectedEvent.status === 'rejected' && (
                      <div className="pt-4 border-t border-white/20">
                        <div className="bg-red-500/20 p-3 rounded-lg">
                          <p className="text-red-200 text-sm">
                            ❌ Ditolak pada {new Date(selectedEvent.rejectedAt).toLocaleDateString('id-ID')}
                          </p>
                          <p className="text-white text-sm mt-1">{selectedEvent.rejectionReason}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-blue-200 text-center py-8">Pilih event dari tabel untuk melihat detail</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
