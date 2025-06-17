
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

const AdminPages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  const [pages, setPages] = useState([
    {
      id: 1,
      title: 'Tentang Kami',
      slug: 'about',
      content: 'Konten halaman tentang kami',
      status: 'Published',
      lastModified: '2024-01-15'
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
      lastModified: new Date().toISOString().split('T')[0]
    };
    
    setPages([...pages, newItem]);
    setFormData({});
    setShowAddForm(false);
    
    toast({
      title: 'Halaman Ditambahkan',
      description: 'Halaman baru berhasil ditambahkan',
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    const updatedData = pages.map((item: any) => 
      item.id === editingItem.id 
        ? { ...formData, lastModified: new Date().toISOString().split('T')[0] }
        : item
    );
    
    setPages(updatedData);
    setFormData({});
    setShowAddForm(false);
    setEditingItem(null);
    
    toast({
      title: 'Halaman Diperbarui',
      description: 'Halaman berhasil diperbarui',
    });
  };

  const handleDelete = (id: number) => {
    setPages(pages.filter((item: any) => item.id !== id));
    
    toast({
      title: 'Halaman Dihapus',
      description: 'Halaman berhasil dihapus',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Kelola Halaman</h1>
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
              Tambah Halaman
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">
                  {editingItem ? 'Edit' : 'Tambah'} Halaman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Judul Halaman"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="Slug (URL)"
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Textarea
                  placeholder="Konten Halaman"
                  value={formData.content || ''}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                  rows={6}
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
              <CardTitle className="text-white">Daftar Halaman</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-100">Judul</TableHead>
                    <TableHead className="text-blue-100">Slug</TableHead>
                    <TableHead className="text-blue-100">Status</TableHead>
                    <TableHead className="text-blue-100">Terakhir Diubah</TableHead>
                    <TableHead className="text-blue-100">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pages.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-white">{item.title}</TableCell>
                      <TableCell className="text-white">{item.slug}</TableCell>
                      <TableCell className="text-white">{item.status}</TableCell>
                      <TableCell className="text-white">{item.lastModified}</TableCell>
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

export default AdminPages;
