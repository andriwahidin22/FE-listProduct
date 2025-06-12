
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Antivirus Pro", href: "/products" },
    { name: "Firewall Enterprise", href: "/products" },
    { name: "Performance Booster", href: "/products" },
    { name: "Family Protection", href: "/products" }
  ];

  const supportLinks = [
    { name: "Pusat Bantuan", href: "/support" },
    { name: "Download", href: "/download" },
    { name: "Dokumentasi", href: "/support" },
    { name: "Community Forum", href: "/support" }
  ];

  const companyLinks = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Karir", href: "/about" },
    { name: "Partner", href: "/about" },
    { name: "Press", href: "/blog" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-bold">CyberGuard</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Melindungi sistem, data, dan privasi Anda dengan solusi keamanan siber terdepan. 
              Kepercayaan lebih dari 10 juta pengguna di seluruh dunia.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">info@cyberguard.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Produk</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Perusahaan</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-blue-700/50 rounded-2xl p-6 mb-8">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-blue-100">Dapatkan tips keamanan siber dan update produk terbaru</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-blue-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200 text-sm">
                © {currentYear} CyberGuard. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 text-sm">
                <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-blue-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
