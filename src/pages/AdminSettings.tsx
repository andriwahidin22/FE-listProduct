
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminSidebar from '../components/AdminSidebar';

const AdminSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [generalSettings, setGeneralSettings] = useState({
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
    backupFrequency: 'Daily',
    timezone: 'Asia/Jakarta',
    sessionTimeout: '30',
    maxFileUpload: '10'
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
    // Save general settings logic here
    toast({
      title: 'Pengaturan Tersimpan',
      description: 'Pengaturan sistem berhasil disimpan',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pengaturan Sistem</h1>
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
            {/* System Settings */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Pengaturan Sistem</CardTitle>
                <CardDescription className="text-blue-200">
                  Konfigurasi dasar sistem
                </CardDescription>
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
                <div>
                  <label className="text-white block mb-2">Frekuensi Backup</label>
                  <select
                    value={generalSettings.backupFrequency}
                    onChange={(e) => setGeneralSettings({...generalSettings, backupFrequency: e.target.value})}
                    className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
                  >
                    <option value="Daily">Harian</option>
                    <option value="Weekly">Mingguan</option>
                    <option value="Monthly">Bulanan</option>
                  </select>
                </div>
                <div>
                  <label className="text-white block mb-2">Timezone</label>
                  <select
                    value={generalSettings.timezone}
                    onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
                    className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
                  >
                    <option value="Asia/Jakarta">Asia/Jakarta</option>
                    <option value="Asia/Surabaya">Asia/Surabaya</option>
                    <option value="Asia/Makassar">Asia/Makassar</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Pengaturan Keamanan</CardTitle>
                <CardDescription className="text-blue-200">
                  Konfigurasi keamanan sistem
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-white block mb-2">Session Timeout (menit)</label>
                  <input
                    type="number"
                    value={generalSettings.sessionTimeout}
                    onChange={(e) => setGeneralSettings({...generalSettings, sessionTimeout: e.target.value})}
                    className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
                    min="5"
                    max="120"
                  />
                </div>
                <div>
                  <label className="text-white block mb-2">Max File Upload (MB)</label>
                  <input
                    type="number"
                    value={generalSettings.maxFileUpload}
                    onChange={(e) => setGeneralSettings({...generalSettings, maxFileUpload: e.target.value})}
                    className="bg-white/10 border-white/20 text-white rounded-md p-2 w-full"
                    min="1"
                    max="100"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 w-full lg:w-auto">
              Simpan Pengaturan Sistem
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
