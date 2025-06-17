
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Package, 
  Newspaper, 
  Users, 
  Settings, 
  BarChart3,
  FileText,
  MessageSquare,
  Download,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: BarChart3,
      description: 'Overview & Analytics'
    },
    {
      title: 'Produk',
      href: '/admin/products',
      icon: Package,
      description: 'Kelola Produk Antivirus'
    },
    {
      title: 'Berita',
      href: '/admin/news',
      icon: Newspaper,
      description: 'Kelola Artikel & Berita'
    },
    {
      title: 'Download',
      href: '/admin/downloads',
      icon: Download,
      description: 'Kelola File Download'
    },
    {
      title: 'Pengguna',
      href: '/admin/users',
      icon: Users,
      description: 'Manajemen User'
    },
    {
      title: 'Pesan',
      href: '/admin/messages',
      icon: MessageSquare,
      description: 'Pesan dari Kontak'
    },
    {
      title: 'Halaman',
      href: '/admin/pages',
      icon: FileText,
      description: 'Kelola Konten Halaman'
    },
    {
      title: 'Website',
      href: '/admin/website',
      icon: Globe,
      description: 'Pengaturan Website'
    },
    {
      title: 'Pengaturan',
      href: '/admin/settings',
      icon: Settings,
      description: 'Konfigurasi Sistem'
    }
  ];

  return (
    <div className="w-64 bg-white/10 backdrop-blur-sm border-r border-white/20 min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">CyberGuard</h2>
            <p className="text-blue-200 text-sm">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-orange-500/20 text-white border border-orange-500/30"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs opacity-75">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
