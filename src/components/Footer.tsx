import React from 'react';
import { Wifi, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Produk & Layanan': [
      'Paket Internet Rumah',
      'Internet Bisnis',
      'Dedicated Internet',
      'WiFi Coverage',
      'Technical Support',
    ],
    'Perusahaan': [
      'Tentang BYTERA',
      'Karir',
      'Blog & News',
      'Press Release',
      'Investor Relations',
    ],
    'Dukungan': [
      'Customer Care',
      'Installation Guide',
      'Troubleshooting',
      'Speed Test',
      'Coverage Check',
    ],
    'Legal': [
      'Terms of Service',
      'Privacy Policy',
      'SLA Agreement',
      'Refund Policy',
      'Fair Usage Policy',
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Wifi className="w-10 h-10 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BYTERA
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Penyedia layanan internet terdepan di Indonesia dengan teknologi fiber optic 
                terbaru dan dukungan pelanggan terbaik.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">(021) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">info@bytera.id</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    Jl. Teknologi No. 123,<br />
                    Jakarta Selatan 12345
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-lg font-bold mb-4 text-white">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-bold mb-2">Dapatkan Update Terbaru</h3>
              <p className="text-gray-400">
                Subscribe untuk mendapatkan info promo dan update layanan terbaru
              </p>
            </div>
            
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-xl hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 BYTERA. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🏆 Best ISP Award 2024</span>
              <span>🛡️ ISO 27001 Certified</span>
              <span>⭐ 4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
