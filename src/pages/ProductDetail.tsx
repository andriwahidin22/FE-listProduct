import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Check, ArrowLeft, ExternalLink, Download } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Data produk (nantinya bisa dari API/database)
  const products = [
    {
      id: 1,
      name: 'CyberGuard Antivirus Pro',
      description: 'Perlindungan antivirus terdepan dengan teknologi AI untuk deteksi real-time',
      longDescription: 'CyberGuard Antivirus Pro adalah solusi keamanan terdepan yang menggunakan teknologi Artificial Intelligence untuk memberikan proteksi real-time terhadap berbagai ancaman cyber. Dengan database yang selalu update dan algoritma machine learning canggih, produk ini mampu mendeteksi malware, virus, ransomware, dan ancaman siber lainnya dengan tingkat akurasi tinggi. Dilengkapi dengan firewall terintegrasi, web protection, dan email security untuk perlindungan komprehensif.',
      price: 'Rp 299.000/tahun',
      category: 'Personal',
      website: 'https://www.norton.com',
      downloadUrl: 'https://www.norton.com/downloads',
      features: [
        'Real-time scanning dengan AI detection',
        'Automatic malware removal',
        'Web protection dan safe browsing',
        'Email security dan anti-phishing',
        'Firewall terintegrasi',
        'VPN basic (500MB/bulan)',
        'Password manager',
        'Auto-update virus definitions'
      ],
      systemRequirements: {
        windows: ['Windows 10/11 (64-bit)', '4 GB RAM', '2 GB storage', 'Internet connection'],
        mac: ['macOS 10.15+', '4 GB RAM', '3 GB storage', 'Internet connection']
      },
      benefits: [
        'Proteksi 24/7 terhadap ancaman terbaru',
        'Performa sistem tetap optimal',
        'Interface user-friendly',
        'Customer support profesional',
        'Update otomatis tanpa gangguan'
      ]
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
      features: [
        'Advanced threat detection dengan AI',
        'Deep packet inspection',
        'Intrusion Detection & Prevention System',
        'Network monitoring real-time',
        'VPN gateway enterprise',
        'Multi-layer security architecture',
        'Centralized management console',
        'Advanced reporting & analytics'
      ],
      systemRequirements: {
        server: ['Windows Server 2019+', '16 GB RAM', '100 GB storage', 'Dedicated network interface'],
        linux: ['Ubuntu 20.04+ / CentOS 8+', '16 GB RAM', '100 GB storage', 'Multiple network interfaces']
      },
      benefits: [
        'Proteksi jaringan enterprise grade',
        'Scalability untuk pertumbuhan bisnis',
        'Compliance dengan standar industri',
        'Support 24/7 dengan SLA guarantee',
        'Integration dengan security tools lain'
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <Layout showHero={true}>
        <div className="h-12" />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Link to="/products">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Kembali ke Produk
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showHero={true}>
      <div className="h-12" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/products">
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Produk
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{product.name}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-2xl font-bold text-orange-400">{product.price}</span>
                      <span className="px-3 py-1 bg-white/10 text-blue-100 text-sm rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-blue-100 text-lg">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Deskripsi Lengkap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">{product.longDescription}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Fitur Utama</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Keuntungan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <span className="text-blue-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Sistem Requirement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.systemRequirements).map(([platform, requirements]) => (
                    <div key={platform}>
                      <h4 className="font-semibold text-white mb-3 capitalize">{platform}</h4>
                      <ul className="space-y-1">
                        {requirements.map((req, index) => (
                          <li key={index} className="text-sm text-blue-100">• {req}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Download & Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Sekarang
                    </Button>
                  </a>
                  <a href={product.website} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-black hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website Resmi
                    </Button>
                  </a>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-sm text-blue-100 space-y-2">
                    <p><strong>Kategori:</strong> {product.category}</p>
                    <p><strong>Harga:</strong> {product.price}</p>
                    <p><strong>Trial:</strong> 30 hari gratis</p>
                    <p><strong>Support:</strong> 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white text-lg">Butuh Bantuan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-4">
                  Tim support kami siap membantu Anda memilih solusi yang tepat.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-black hover:bg-white/10"
                  >
                    Hubungi Support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white text-lg">Produk Terkait</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {products.filter(p => p.id !== product.id).slice(0, 2).map((relatedProduct) => (
                    <Link 
                      key={relatedProduct.id} 
                      to={`/products/${relatedProduct.id}`}
                      className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <h4 className="font-medium text-white text-sm">{relatedProduct.name}</h4>
                      <p className="text-blue-200 text-xs mt-1">{relatedProduct.price}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
