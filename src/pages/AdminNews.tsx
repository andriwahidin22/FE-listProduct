
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminNews = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Update Keamanan Terbaru CyberGuard 2024',
      content: 'CyberGuard telah merilis update keamanan terbaru yang mencakup proteksi terhadap ancaman ransomware generasi terbaru.',
      date: '2024-01-15',
      author: 'Tim CyberGuard',
      status: 'Published'
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

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    
    setNews([...news, newItem]);
    setFormData({});
    setShowAddForm(false);
    
    toast({
      title: 'Berita Ditambahkan',
      description: 'Berita baru berhasil ditambahkan',
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    const updatedData = news.map((item: any) => 
      item.id === editingItem.id ? formData : item
    );
    
    setNews(updatedData);
    setFormData({});
    setShowAddForm(false);
    setEditingItem(null);
    
    toast({
      title: 'Berita Diperbarui',
      description: 'Berita berhasil diperbarui',
    });
  };

  const handleDelete = (id: number) => {
    setNews(news.filter((item: any) => item.id !== id));
    
    toast({
      title: 'Berita Dihapus',
      description: 'Berita berhasil dihapus',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Kelola Berita</h1>
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
          <div className="mb-6">
            <Button
              onClick={() => {
                setShowAddForm(true);
                setFormData({});
                setEditingItem(null);
              }}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Berita
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">
                  {editingItem ? 'Edit' : 'Tambah'} Berita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Judul Berita"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Textarea
                  placeholder="Konten Berita"
                  value={formData.content || ''}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                  rows={6}
                />
                <Input
                  placeholder="Penulis"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <select
                  value={formData.status || 'Draft'}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
                <div className="flex space-x-4">
                  <Button
                    onClick={editingItem ? handleUpdate : handleAdd}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    {editingItem ? 'Update' : 'Simpan'}
                  </Button>
                  <Button
                    onClick={() => {
                      setShowAddForm(false);
                      setFormData({});
                      setEditingItem(null);
                    }}
                    variant="outline"
                    className="border-white/20 text-black hover:bg-white/10"
                  >
                    Batal
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Daftar Berita</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-100">Judul</TableHead>
                    <TableHead className="text-blue-100">Penulis</TableHead>
                    <TableHead className="text-blue-100">Status</TableHead>
                    <TableHead className="text-blue-100">Tanggal</TableHead>
                    <TableHead className="text-blue-100">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {news.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-white">{item.title}</TableCell>
                      <TableCell className="text-white">{item.author}</TableCell>
                      <TableCell className="text-white">{item.status}</TableCell>
                      <TableCell className="text-white">{item.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleEdit(item)}
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600"
                          >
                            <Edit className="h-3 w-3" />
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
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
