
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Plus, Edit, Trash2, LogOut, Package, Newspaper, BarChart3, Download, Users, MessageSquare, FileText, Globe, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get active tab from URL
  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.includes('/products')) return 'products';
    if (path.includes('/news')) return 'news';
    if (path.includes('/downloads')) return 'downloads';
    if (path.includes('/users')) return 'users';
    if (path.includes('/messages')) return 'messages';
    if (path.includes('/pages')) return 'pages';
    if (path.includes('/website')) return 'website';
    if (path.includes('/settings')) return 'settings';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Products state
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

  // News state
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

  // Downloads state
  const [downloads, setDownloads] = useState([
    {
      id: 1,
      name: 'CyberGuard Scanner Tool',
      description: 'Tool scanner gratis untuk deteksi malware',
      fileUrl: 'https://example.com/scanner.exe',
      fileSize: '15.2 MB',
      version: '2.1.0',
      category: 'Tools'
    }
  ]);

  // Users state
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      joinDate: '2024-01-01'
    }
  ]);

  // Messages state
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Pertanyaan tentang produk',
      message: 'Saya ingin mengetahui lebih lanjut tentang CyberGuard Pro',
      date: '2024-01-15',
      status: 'Unread'
    }
  ]);

  // Pages state
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

  // Website settings state
  const [websiteSettings, setWebsiteSettings] = useState({
    siteName: 'CyberGuard',
    siteDescription: 'Solusi Keamanan Cyber Terdepan',
    contactEmail: 'info@cyberguard.com',
    contactPhone: '+62-21-1234567',
    address: 'Jakarta, Indonesia'
  });

  // General settings state
  const [generalSettings, setGeneralSettings] = useState({
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
    backupFrequency: 'Daily',
    timezone: 'Asia/Jakarta'
  });

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    if (!adminAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    toast({
      title: 'Logout Berhasil',
      description: 'Anda telah keluar dari admin panel',
    });
    navigate('/admin/login');
  };

  // Generic handlers
  const getDataByTab = () => {
    switch (activeTab) {
      case 'products': return products;
      case 'news': return news;
      case 'downloads': return downloads;
      case 'users': return users;
      case 'messages': return messages;
      case 'pages': return pages;
      default: return [];
    }
  };

  const setDataByTab = (data: any) => {
    switch (activeTab) {
      case 'products': setProducts(data); break;
      case 'news': setNews(data); break;
      case 'downloads': setDownloads(data); break;
      case 'users': setUsers(data); break;
      case 'messages': setMessages(data); break;
      case 'pages': setPages(data); break;
    }
  };

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      ...formData,
      ...(activeTab === 'products' && { features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : [] }),
      ...(activeTab === 'news' && { date: new Date().toISOString().split('T')[0] }),
      ...(activeTab === 'users' && { joinDate: new Date().toISOString().split('T')[0] }),
      ...(activeTab === 'messages' && { date: new Date().toISOString().split('T')[0] }),
      ...(activeTab === 'pages' && { lastModified: new Date().toISOString().split('T')[0] })
    };
    
    const currentData = getDataByTab();
    setDataByTab([...currentData, newItem]);
    setFormData({});
    setShowAddForm(false);
    
    toast({
      title: 'Data Ditambahkan',
      description: `${getTabDisplayName()} baru berhasil ditambahkan`,
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      ...item,
      ...(activeTab === 'products' && item.features && { features: item.features.join(', ') })
    });
    setShowAddForm(true);
  };

  const handleUpdate = () => {
    const currentData = getDataByTab();
    const updatedData = currentData.map((item: any) => 
      item.id === editingItem.id 
        ? { 
            ...formData, 
            ...(activeTab === 'products' && { features: formData.features ? formData.features.split(',').map((f: string) => f.trim()) : [] }),
            ...(activeTab === 'pages' && { lastModified: new Date().toISOString().split('T')[0] })
          }
        : item
    );
    
    setDataByTab(updatedData);
    setFormData({});
    setShowAddForm(false);
    setEditingItem(null);
    
    toast({
      title: 'Data Diperbarui',
      description: `${getTabDisplayName()} berhasil diperbarui`,
    });
  };

  const handleDelete = (id: number) => {
    const currentData = getDataByTab();
    setDataByTab(currentData.filter((item: any) => item.id !== id));
    
    toast({
      title: 'Data Dihapus',
      description: `${getTabDisplayName()} berhasil dihapus`,
    });
  };

  const getTabDisplayName = () => {
    const names: Record<string, string> = {
      products: 'Produk',
      news: 'Berita',
      downloads: 'Download',
      users: 'Pengguna',
      messages: 'Pesan',
      pages: 'Halaman'
    };
    return names[activeTab] || '';
  };

  const renderFormFields = () => {
    switch (activeTab) {
      case 'products':
        return (
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
        );

      case 'news':
        return (
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
            <select
              value={formData.status || 'Draft'}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="bg-white/10 border-white/20 text-white rounded-md p-2"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </>
        );

      case 'downloads':
        return (
          <>
            <Input
              placeholder="Nama File"
              value={formData.name || ''}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Textarea
              placeholder="Deskripsi"
              value={formData.description || ''}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="URL File"
              value={formData.fileUrl || ''}
              onChange={(e) => setFormData({...formData, fileUrl: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Ukuran File"
              value={formData.fileSize || ''}
              onChange={(e) => setFormData({...formData, fileSize: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Versi"
              value={formData.version || ''}
              onChange={(e) => setFormData({...formData, version: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Kategori"
              value={formData.category || ''}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
          </>
        );

      case 'users':
        return (
          <>
            <Input
              placeholder="Nama Lengkap"
              value={formData.name || ''}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Email"
              value={formData.email || ''}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <select
              value={formData.role || 'User'}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="bg-white/10 border-white/20 text-white rounded-md p-2"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
            </select>
            <select
              value={formData.status || 'Active'}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="bg-white/10 border-white/20 text-white rounded-md p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </>
        );

      case 'pages':
        return (
          <>
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
              className="bg-white/10 border-white/20 text-white rounded-md p-2"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </>
        );

      default:
        return null;
    }
  };

  const renderTableHeaders = () => {
    switch (activeTab) {
      case 'products':
        return (
          <>
            <TableHead className="text-blue-100">Nama</TableHead>
            <TableHead className="text-blue-100">Kategori</TableHead>
            <TableHead className="text-blue-100">Harga</TableHead>
            <TableHead className="text-blue-100">Website</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      case 'news':
        return (
          <>
            <TableHead className="text-blue-100">Judul</TableHead>
            <TableHead className="text-blue-100">Penulis</TableHead>
            <TableHead className="text-blue-100">Status</TableHead>
            <TableHead className="text-blue-100">Tanggal</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      case 'downloads':
        return (
          <>
            <TableHead className="text-blue-100">Nama</TableHead>
            <TableHead className="text-blue-100">Kategori</TableHead>
            <TableHead className="text-blue-100">Versi</TableHead>
            <TableHead className="text-blue-100">Ukuran</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      case 'users':
        return (
          <>
            <TableHead className="text-blue-100">Nama</TableHead>
            <TableHead className="text-blue-100">Email</TableHead>
            <TableHead className="text-blue-100">Role</TableHead>
            <TableHead className="text-blue-100">Status</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      case 'messages':
        return (
          <>
            <TableHead className="text-blue-100">Nama</TableHead>
            <TableHead className="text-blue-100">Email</TableHead>
            <TableHead className="text-blue-100">Subject</TableHead>
            <TableHead className="text-blue-100">Status</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      case 'pages':
        return (
          <>
            <TableHead className="text-blue-100">Judul</TableHead>
            <TableHead className="text-blue-100">Slug</TableHead>
            <TableHead className="text-blue-100">Status</TableHead>
            <TableHead className="text-blue-100">Terakhir Diubah</TableHead>
            <TableHead className="text-blue-100">Aksi</TableHead>
          </>
        );
      default:
        return null;
    }
  };

  const renderTableRow = (item: any) => {
    switch (activeTab) {
      case 'products':
        return (
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
        );
      case 'news':
        return (
          <>
            <TableCell className="text-white">{item.title}</TableCell>
            <TableCell className="text-white">{item.author}</TableCell>
            <TableCell className="text-white">{item.status}</TableCell>
            <TableCell className="text-white">{item.date}</TableCell>
          </>
        );
      case 'downloads':
        return (
          <>
            <TableCell className="text-white">{item.name}</TableCell>
            <TableCell className="text-white">{item.category}</TableCell>
            <TableCell className="text-white">{item.version}</TableCell>
            <TableCell className="text-white">{item.fileSize}</TableCell>
          </>
        );
      case 'users':
        return (
          <>
            <TableCell className="text-white">{item.name}</TableCell>
            <TableCell className="text-white">{item.email}</TableCell>
            <TableCell className="text-white">{item.role}</TableCell>
            <TableCell className="text-white">{item.status}</TableCell>
          </>
        );
      case 'messages':
        return (
          <>
            <TableCell className="text-white">{item.name}</TableCell>
            <TableCell className="text-white">{item.email}</TableCell>
            <TableCell className="text-white">{item.subject}</TableCell>
            <TableCell className="text-white">{item.status}</TableCell>
          </>
        );
      case 'pages':
        return (
          <>
            <TableCell className="text-white">{item.title}</TableCell>
            <TableCell className="text-white">{item.slug}</TableCell>
            <TableCell className="text-white">{item.status}</TableCell>
            <TableCell className="text-white">{item.lastModified}</TableCell>
          </>
        );
      default:
        return null;
    }
  };

  const renderSettings = () => {
    if (activeTab === 'website') {
      return (
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-white">Pengaturan Website</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Nama Situs"
              value={websiteSettings.siteName}
              onChange={(e) => setWebsiteSettings({...websiteSettings, siteName: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Textarea
              placeholder="Deskripsi Situs"
              value={websiteSettings.siteDescription}
              onChange={(e) => setWebsiteSettings({...websiteSettings, siteDescription: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Email Kontak"
              value={websiteSettings.contactEmail}
              onChange={(e) => setWebsiteSettings({...websiteSettings, contactEmail: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Input
              placeholder="Telepon Kontak"
              value={websiteSettings.contactPhone}
              onChange={(e) => setWebsiteSettings({...websiteSettings, contactPhone: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Textarea
              placeholder="Alamat"
              value={websiteSettings.address}
              onChange={(e) => setWebsiteSettings({...websiteSettings, address: e.target.value})}
              className="bg-white/10 border-white/20 text-white placeholder-blue-200"
            />
            <Button className="bg-green-500 hover:bg-green-600">
              Simpan Pengaturan Website
            </Button>
          </CardContent>
        </Card>
      );
    }

    if (activeTab === 'settings') {
      return (
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-white">Pengaturan Sistem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={generalSettings.maintenanceMode}
                onChange={(e) => setGeneralSettings({...generalSettings, maintenanceMode: e.target.checked})}
                className="w-4 h-4"
              />
              <label className="text-white">Mode Maintenance</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={generalSettings.allowRegistration}
                onChange={(e) => setGeneralSettings({...generalSettings, allowRegistration: e.target.checked})}
                className="w-4 h-4"
              />
              <label className="text-white">Izinkan Registrasi</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={generalSettings.emailNotifications}
                onChange={(e) => setGeneralSettings({...generalSettings, emailNotifications: e.target.checked})}
                className="w-4 h-4"
              />
              <label className="text-white">Notifikasi Email</label>
            </div>
            <select
              value={generalSettings.backupFrequency}
              onChange={(e) => setGeneralSettings({...generalSettings, backupFrequency: e.target.value})}
              className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
            >
              <option value="Daily">Harian</option>
              <option value="Weekly">Mingguan</option>
              <option value="Monthly">Bulanan</option>
            </select>
            <select
              value={generalSettings.timezone}
              onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
              className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
            >
              <option value="Asia/Jakarta">Asia/Jakarta</option>
              <option value="Asia/Surabaya">Asia/Surabaya</option>
              <option value="Asia/Makassar">Asia/Makassar</option>
            </select>
            <Button className="bg-green-500 hover:bg-green-600">
              Simpan Pengaturan Sistem
            </Button>
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
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

          {/* Settings */}
          {(activeTab === 'website' || activeTab === 'settings') && renderSettings()}

          {/* CRUD Content */}
          {['products', 'news', 'downloads', 'users', 'messages', 'pages'].includes(activeTab) && (
            <>
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
                  Tambah {getTabDisplayName()}
                </Button>
              </div>

              {showAddForm && (
                <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingItem ? 'Edit' : 'Tambah'} {getTabDisplayName()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {renderFormFields()}
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
                  <CardTitle className="text-white">
                    Daftar {getTabDisplayName()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {renderTableHeaders()}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getDataByTab().map((item: any) => (
                        <TableRow key={item.id}>
                          {renderTableRow(item)}
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
