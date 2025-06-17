
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

const AdminProducts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'CyberGuard Antivirus Pro',
      description: 'Perlindungan antivirus terdepan dengan teknologi AI untuk deteksi real-time',
      longDescription: 'CyberGuard Antivirus Pro adalah solusi keamanan terdepan yang menggunakan teknologi Artificial Intelligence untuk memberikan proteksi real-time terhadap berbagai ancaman cyber.',
      price: 'Rp 299.000/tahun',
      category: 'Personal',
      website: 'https://www.norton.com',
      downloadUrl: 'https://www.norton.com/downloads',
      features: ['Real-time scanning', 'AI malware detection', 'Web protection', 'Email security']
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
      features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : []
    };
    
    setProducts([...products, newItem]);
    setFormData({});
    setShowAddForm(false);
    
    toast({
      title: 'Produk Ditambahkan',
      description: 'Produk baru berhasil ditambahkan',
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      ...item,
      features: item.features.join(', ')
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    const updatedData = products.map((item: any) => 
      item.id === editingItem.id 
        ? { 
            ...formData, 
            features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : []
          }
        : item
    );
    
    setProducts(updatedData);
    setFormData({});
    setShowAddForm(false);
    setEditingItem(null);
    
    toast({
      title: 'Produk Diperbarui',
      description: 'Produk berhasil diperbarui',
    });
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((item: any) => item.id !== id));
    
    toast({
      title: 'Produk Dihapus',
      description: 'Produk berhasil dihapus',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Kelola Produk</h1>
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
              Tambah Produk
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">
                  {editingItem ? 'Edit' : 'Tambah'} Produk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Nama Produk"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Textarea
                  placeholder="Deskripsi Singkat"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                  rows={3}
                />
                <Textarea
                  placeholder="Deskripsi Lengkap"
                  value={formData.longDescription || ''}
                  onChange={(e) => setFormData({...formData, longDescription: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                  rows={6}
                />
                <Input
                  placeholder="Harga"
                  value={formData.price || ''}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="Kategori"
                  value={formData.category || ''}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="Website URL"
                  value={formData.website || ''}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="Download URL"
                  value={formData.downloadUrl || ''}
                  onChange={(e) => setFormData({...formData, downloadUrl: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="Fitur (pisahkan dengan koma)"
                  value={formData.features || ''}
                  onChange={(e) => setFormData({...formData, features: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
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
              <CardTitle className="text-white">Daftar Produk</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-100">Nama</TableHead>
                    <TableHead className="text-blue-100">Kategori</TableHead>
                    <TableHead className="text-blue-100">Harga</TableHead>
                    <TableHead className="text-blue-100">Website</TableHead>
                    <TableHead className="text-blue-100">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-white">{item.name}</TableCell>
                      <TableCell className="text-white">{item.category}</TableCell>
                      <TableCell className="text-white">{item.price}</TableCell>
                      <TableCell className="text-blue-200">
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.website}
                        </a>
                      </TableCell>
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

export default AdminProducts;
