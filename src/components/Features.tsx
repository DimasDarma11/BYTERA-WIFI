import React, { useEffect, useRef, useState } from 'react';
import { Wifi, Shield, Headphones, Zap, Globe, Settings } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Kecepatan Super',
      description: 'Internet hingga 1 Gbps dengan teknologi fiber optic terdepan untuk pengalaman browsing yang luar biasa.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Koneksi Stabil',
      description: 'Jaminan uptime 99.9% dengan infrastruktur redundan dan monitoring 24/7 untuk koneksi yang selalu stabil.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Headphones,
      title: 'Layanan 24/7',
      description: 'Tim support profesional siap membantu Anda kapan saja melalui telepon, chat, atau kunjungan teknisi.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Jangkauan Luas',
      description: 'Coverage area yang terus berkembang di seluruh Indonesia dengan prioritas kualitas sinyal terbaik.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Wifi,
      title: 'WiFi Unlimited',
      description: 'Akses internet tanpa batas dengan perangkat router WiFi 6 berkualitas tinggi dan jangkauan optimal.',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      icon: Settings,
      title: 'Mudah Diatur',
      description: 'Instalasi cepat dan pengaturan yang user-friendly dengan aplikasi mobile untuk monitoring usage.',
      color: 'from-teal-400 to-blue-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mengapa Memilih{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BYTERA?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan layanan internet terbaik dengan teknologi terdepan 
              dan dukungan pelanggan yang luar biasa
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-br ${feature.color.replace('from-', 'border-').replace('to-', 'border-')} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
             style={{ transitionDelay: '800ms' }}>
          {[
            { number: '1K', label: 'Pelanggan Puas' },
            { number: '25+', label: 'Kota Terjangkau' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '24/7', label: 'Customer Support' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
