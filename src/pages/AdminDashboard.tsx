
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Plus, Edit, Trash2, LogOut, Package, Newspaper, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Product states
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'CyberGuard Antivirus Pro',
      description: 'Perlindungan antivirus terdepan dengan teknologi AI untuk deteksi real-time',
      longDescription: 'CyberGuard Antivirus Pro adalah solusi keamanan terdepan yang menggunakan teknologi Artificial Intelligence untuk memberikan proteksi real-time terhadap berbagai ancaman cyber. Dengan database yang selalu update dan algoritma machine learning canggih, produk ini mampu mendeteksi malware, virus, ransomware, dan ancaman siber lainnya dengan tingkat akurasi tinggi. Dilengkapi dengan firewall terintegrasi, web protection, dan email security untuk perlindungan komprehensif.',
      price: 'Rp 299.000/tahun',
      category: 'Personal',
      website: 'https://www.norton.com',
      downloadUrl: 'https://www.norton.com/downloads',
      features: ['Real-time scanning', 'AI malware detection', 'Web protection', 'Email security']
    },
    {
      id: 2,
      name: 'CyberGuard Firewall Enterprise',
      description: 'Solusi firewall tingkat enterprise untuk perlindungan jaringan komprehensif',
      longDescription: 'CyberGuard Firewall Enterprise adalah solusi keamanan jaringan tingkat enterprise yang dirancang khusus untuk melindungi infrastruktur IT perusahaan dari ancaman cyber canggih. Dengan teknologi deep packet inspection, intrusion detection system (IDS), dan advanced threat protection, produk ini memberikan visibilitas penuh terhadap lalu lintas jaringan dan mampu mendeteksi serta memblokir ancaman dalam real-time.',
      price: 'Rp 2.999.000/tahun',
      category: 'Enterprise',
      website: 'https://www.checkpoint.com',
      downloadUrl: 'https://www.checkpoint.com/downloads',
      features: ['Advanced threat detection', 'Network monitoring', 'VPN support', 'Multi-layer security']
    }
  ]);

  // News states
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Update Keamanan Terbaru CyberGuard 2024',
      content: 'CyberGuard telah merilis update keamanan terbaru yang mencakup proteksi terhadap ancaman ransomware generasi terbaru.',
      date: '2024-01-15',
      author: 'Tim CyberGuard'
    },
    {
      id: 2,
      title: 'Tips Melindungi Data dari Serangan Phishing',
      content: 'Pelajari cara-cara efektif untuk melindungi data pribadi dan perusahaan dari serangan phishing yang semakin canggih.',
      date: '2024-01-10',
      author: 'Security Expert'
    }
  ]);

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    // Check admin auth
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

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...formData,
      features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : []
    };
    setProducts([...products, newProduct]);
    setFormData({});
    setShowAddForm(false);
    toast({
      title: 'Produk Ditambahkan',
      description: 'Produk baru berhasil ditambahkan',
    });
  };

  const handleAddNews = () => {
    const newNews = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    setNews([...news, newNews]);
    setFormData({});
    setShowAddForm(false);
    toast({
      title: 'Berita Ditambahkan',
      description: 'Berita baru berhasil ditambahkan',
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      ...item,
      features: item.features ? item.features.join(', ') : ''
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    if (activeTab === 'products') {
      setProducts(products.map(p => 
        p.id === editingItem.id 
          ? { ...formData, features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : [] }
          : p
      ));
    } else {
      setNews(news.map(n => n.id === editingItem.id ? formData : n));
    }
    setFormData({});
    setShowAddForm(false);
    setEditingItem(null);
    toast({
      title: 'Data Diperbarui',
      description: `${activeTab === 'products' ? 'Produk' : 'Berita'} berhasil diperbarui`,
    });
  };

  const handleDelete = (id: number) => {
    if (activeTab === 'products') {
      setProducts(products.filter(p => p.id !== id));
    } else {
      setNews(news.filter(n => n.id !== id));
    }
    toast({
      title: 'Data Dihapus',
      description: `${activeTab === 'products' ? 'Produk' : 'Berita'} berhasil dihapus`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
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
          {/* Overview Cards */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Produk</CardTitle>
                  <Package className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{products.length}</div>
                  <p className="text-xs text-blue-200">Produk keamanan tersedia</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Berita</CardTitle>
                  <Newspaper className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{news.length}</div>
                  <p className="text-xs text-blue-200">Artikel dan berita</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Status Sistem</CardTitle>
                  <BarChart3 className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">Online</div>
                  <p className="text-xs text-blue-200">Semua sistem berjalan normal</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-6">
            <Button
              onClick={() => setActiveTab('overview')}
              className={activeTab === 'overview' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/10 hover:bg-white/20'}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </Button>
            <Button
              onClick={() => setActiveTab('products')}
              className={activeTab === 'products' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/10 hover:bg-white/20'}
            >
              <Package className="h-4 w-4 mr-2" />
              Produk
            </Button>
            <Button
              onClick={() => setActiveTab('news')}
              className={activeTab === 'news' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/10 hover:bg-white/20'}
            >
              <Newspaper className="h-4 w-4 mr-2" />
              Berita
            </Button>
          </div>

          {/* Content based on active tab */}
          {(activeTab === 'products' || activeTab === 'news') && (
            <>
              {/* Add Button */}
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
                  Tambah {activeTab === 'products' ? 'Produk' : 'Berita'}
                </Button>
              </div>

              {/* Add/Edit Form */}
              {showAddForm && (
                <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingItem ? 'Edit' : 'Tambah'} {activeTab === 'products' ? 'Produk' : 'Berita'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeTab === 'products' ? (
                      <>
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
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                    <div className="flex space-x-4">
                      <Button
                        onClick={editingItem ? handleUpdate : (activeTab === 'products' ? handleAddProduct : handleAddNews)}
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

              {/* Data Table */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">
                    Daftar {activeTab === 'products' ? 'Produk' : 'Berita'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {activeTab === 'products' ? (
                          <>
                            <TableHead className="text-blue-100">Nama</TableHead>
                            <TableHead className="text-blue-100">Kategori</TableHead>
                            <TableHead className="text-blue-100">Harga</TableHead>
                            <TableHead className="text-blue-100">Website</TableHead>
                            <TableHead className="text-blue-100">Aksi</TableHead>
                          </>
                        ) : (
                          <>
                            <TableHead className="text-blue-100">Judul</TableHead>
                            <TableHead className="text-blue-100">Penulis</TableHead>
                            <TableHead className="text-blue-100">Tanggal</TableHead>
                            <TableHead className="text-blue-100">Aksi</TableHead>
                          </>
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {(activeTab === 'products' ? products : news).map((item) => (
                        <TableRow key={item.id}>
                          {activeTab === 'products' ? (
                            <>
                              <TableCell className="text-white">{item.name}</TableCell>
                              <TableCell className="text-white">{item.category}</TableCell>
                              <TableCell className="text-white">{item.price}</TableCell>
                              <TableCell className="text-blue-200">
                                <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                  {item.website}
                                </a>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="text-white">{item.title}</TableCell>
                              <TableCell className="text-white">{item.author}</TableCell>
                              <TableCell className="text-white">{item.date}</TableCell>
                            </>
                          )}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
