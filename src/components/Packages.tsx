import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Packages = () => {
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

  const packages = [
    {
      name: 'BYTERA Start',
      speed: '25 Mbps',
      price: '199.000',
      originalPrice: '249.000',
      popular: false,
      features: [
        'Unlimited Internet',
        'Free WiFi Router',
        'Free Installation',
        '24/7 Customer Support',
        'Cocok untuk 1-2 perangkat',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'BYTERA Pro',
      speed: '50 Mbps',
      price: '299.000',
      originalPrice: '399.000',
      popular: true,
      features: [
        'Unlimited Internet',
        'Free WiFi Router 6',
        'Free Installation',
        '24/7 Customer Support',
        'Cocok untuk 3-5 perangkat',
        'Gaming & Streaming HD',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'BYTERA Max',
      speed: '100 Mbps',
      price: '499.000',
      originalPrice: '649.000',
      popular: false,
      features: [
        'Unlimited Internet',
        'Free WiFi Router 6E',
        'Free Installation',
        '24/7 Customer Support',
        'Cocok untuk 6+ perangkat',
        'Gaming & Streaming 4K',
        'Priority Support',
      ],
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paket Internet{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Terbaik
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan internet Anda. Semua paket dilengkapi 
              dengan kecepatan stabil dan dukungan pelanggan 24/7
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 ${
                pkg.popular
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl shadow-purple-200'
                  : 'border-gray-200 bg-white hover:border-blue-300 shadow-xl hover:shadow-2xl'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>TERPOPULER</span>
                  </div>
                </div>
              )}

              {/* Package Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6`}>
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

              {/* Speed */}
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {pkg.speed}
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">Rp{pkg.price}</span>
                  <span className="text-gray-500">/bulan</span>
                </div>
                <div className="text-sm text-gray-500 line-through">
                  Harga normal: Rp{pkg.originalPrice}/bulan
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                pkg.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-200'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-200'
              }`}>
                Pilih Paket Ini
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎉 Promo Spesial Pelanggan Baru!</h3>
            <p className="text-gray-700 mb-4">
              Dapatkan diskon hingga 50% untuk 3 bulan pertama + gratis instalasi senilai Rp200.000
            </p>
            <p className="text-sm text-gray-500">
              *Syarat dan ketentuan berlaku. Promo terbatas dan dapat berubah sewaktu-waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
