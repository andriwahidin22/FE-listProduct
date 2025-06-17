
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi login (ganti dengan logika auth sesungguhnya)
    if (email === 'admin@cyberguard.com' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      toast({
        title: 'Login Berhasil',
        description: 'Selamat datang di Admin Panel CyberGuard',
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: 'Login Gagal',
        description: 'Email atau password salah',
        variant: 'destructive',
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-orange-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Admin Login
          </CardTitle>
          <CardDescription className="text-blue-100">
            Masuk ke panel admin CyberGuard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="admin@cyberguard.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Masuk...' : 'Masuk'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-blue-200">
            Demo: admin@cyberguard.com / admin123
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
