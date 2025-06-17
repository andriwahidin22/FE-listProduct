
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Trash2, LogOut, Mail, MailOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminMessages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Pertanyaan tentang produk',
      message: 'Saya ingin mengetahui lebih lanjut tentang CyberGuard Pro dan apakah ada paket untuk perusahaan.',
      date: '2024-01-15',
      status: 'Unread'
    },
    {
      id: 2,
      name: 'Ahmad Rahman',
      email: 'ahmad@example.com',
      subject: 'Support teknis',
      message: 'Saya mengalami masalah dengan instalasi CyberGuard di Windows 11.',
      date: '2024-01-14',
      status: 'Read'
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

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message);
    if (message.status === 'Unread') {
      const updatedMessages = messages.map(m => 
        m.id === message.id ? {...m, status: 'Read'} : m
      );
      setMessages(updatedMessages);
    }
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter((item: any) => item.id !== id));
    setSelectedMessage(null);
    
    toast({
      title: 'Pesan Dihapus',
      description: 'Pesan berhasil dihapus',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Kelola Pesan</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Messages List */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Daftar Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-blue-100">Status</TableHead>
                      <TableHead className="text-blue-100">Nama</TableHead>
                      <TableHead className="text-blue-100">Subject</TableHead>
                      <TableHead className="text-blue-100">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((item: any) => (
                      <TableRow key={item.id}>
                        <TableCell className="text-white">
                          {item.status === 'Unread' ? (
                            <Mail className="h-4 w-4 text-orange-400" />
                          ) : (
                            <MailOpen className="h-4 w-4 text-green-400" />
                          )}
                        </TableCell>
                        <TableCell className="text-white">{item.name}</TableCell>
                        <TableCell className="text-white">{item.subject}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => handleViewMessage(item)}
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600"
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button
                              onClick={() => handleDelete(item.id)}
                              size="sm"
                              className="bg-red-500 hover:bg-red-600"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Message Detail */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Detail Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMessage ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200">Dari:</label>
                      <p className="text-white">{selectedMessage.name} ({selectedMessage.email})</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200">Subject:</label>
                      <p className="text-white">{selectedMessage.subject}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200">Tanggal:</label>
                      <p className="text-white">{selectedMessage.date}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200">Pesan:</label>
                      <p className="text-white bg-white/5 p-4 rounded-lg mt-2">
                        {selectedMessage.message}
                      </p>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      Balas Pesan
                    </Button>
                  </div>
                ) : (
                  <p className="text-blue-200 text-center">Pilih pesan untuk melihat detail</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
