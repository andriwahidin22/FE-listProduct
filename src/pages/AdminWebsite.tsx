
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminWebsite = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [websiteSettings, setWebsiteSettings] = useState({
    siteName: 'CyberGuard',
    siteDescription: 'Solusi Keamanan Cyber Terdepan',
    contactEmail: 'info@cyberguard.com',
    contactPhone: '+62-21-1234567',
    address: 'Jakarta, Indonesia',
    socialMedia: {
      facebook: 'https://facebook.com/cyberguard',
      twitter: 'https://twitter.com/cyberguard',
      linkedin: 'https://linkedin.com/company/cyberguard'
    }
  });

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

  const handleSave = () => {
    // Save website settings logic here
    toast({
      title: 'Pengaturan Tersimpan',
      description: 'Pengaturan website berhasil disimpan',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pengaturan Website</h1>
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
            {/* General Settings */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Informasi Umum</CardTitle>
                <CardDescription className="text-blue-200">
                  Pengaturan dasar website
                </CardDescription>
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
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Media Sosial</CardTitle>
                <CardDescription className="text-blue-200">
                  Link media sosial perusahaan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="URL Facebook"
                  value={websiteSettings.socialMedia.facebook}
                  onChange={(e) => setWebsiteSettings({
                    ...websiteSettings, 
                    socialMedia: {...websiteSettings.socialMedia, facebook: e.target.value}
                  })}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="URL Twitter"
                  value={websiteSettings.socialMedia.twitter}
                  onChange={(e) => setWebsiteSettings({
                    ...websiteSettings, 
                    socialMedia: {...websiteSettings.socialMedia, twitter: e.target.value}
                  })}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
                <Input
                  placeholder="URL LinkedIn"
                  value={websiteSettings.socialMedia.linkedin}
                  onChange={(e) => setWebsiteSettings({
                    ...websiteSettings, 
                    socialMedia: {...websiteSettings.socialMedia, linkedin: e.target.value}
                  })}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 w-full lg:w-auto">
              Simpan Pengaturan Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWebsite;
