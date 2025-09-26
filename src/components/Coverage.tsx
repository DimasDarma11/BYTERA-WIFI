import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Search, CheckCircle } from 'lucide-react';

const Coverage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchArea, setSearchArea] = useState('');
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

  const coverageAreas = [
    { city: 'Jakarta', districts: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'], status: 'available' },
    { city: 'Bogor', districts: ['Bogor Kota', 'Cibinong', 'Sentul', 'Bogor Barat'], status: 'available' },
    { city: 'Depok', districts: ['Depok Kota', 'Margonda', 'UI Area', 'Cinere'], status: 'available' },
    { city: 'Tangerang', districts: ['Tangerang Kota', 'BSD City', 'Alam Sutera', 'Serpong'], status: 'available' },
    { city: 'Bekasi', districts: ['Bekasi Kota', 'Bekasi Barat', 'Bekasi Timur', 'Tambun'], status: 'available' },
    { city: 'Bandung', districts: ['Bandung Kota', 'Dago', 'Setiabudhi', 'Cihampelas'], status: 'coming-soon' },
    { city: 'Surabaya', districts: ['Surabaya Kota', 'Gubeng', 'Wonokromo', 'Rungkut'], status: 'coming-soon' },
    { city: 'Yogyakarta', districts: ['Yogyakarta Kota', 'Sleman', 'Bantul', 'UGM Area'], status: 'coming-soon' },
  ];

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jangkauan{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Layanan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Layanan BYTERA kini telah menjangkau berbagai kota besar di Indonesia 
              dan terus berkembang untuk melayani lebih banyak area
            </p>

            {/* Area Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari area Anda (cth: Jakarta Selatan)"
                  value={searchArea}
                  onChange={(e) => setSearchArea(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Map Placeholder */}
        <div className={`mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Peta Jangkauan Interaktif</h3>
                <p className="text-gray-600">Peta detail akan segera tersedia untuk melihat coverage area real-time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageAreas.map((area, index) => (
            <div
              key={area.city}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 p-6 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* City Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{area.city}</h3>
                {area.status === 'available' ? (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Tersedia</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1 text-orange-600">
                    <div className="w-5 h-5 border-2 border-orange-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm font-medium">Segera</span>
                  </div>
                )}
              </div>

              {/* Districts */}
              <ul className="space-y-2">
                {area.districts.map((district, districtIndex) => (
                  <li
                    key={district}
                    className={`text-sm text-gray-600 flex items-center space-x-2 ${
                      area.status === 'available' ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      area.status === 'available' ? 'bg-green-500' : 'bg-orange-500'
                    }`}></div>
                    <span>{district}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`w-full mt-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  area.status === 'available'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-200 hover:scale-105'
                    : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-200 hover:scale-105'
                }`}
              >
                {area.status === 'available' ? 'Daftar Sekarang' : 'Notify Me'}
              </button>
            </div>
          ))}
        </div>

        {/* Contact for unlisted areas */}
        <div className={`mt-16 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '1000ms' }}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Area Anda Belum Terdaftar?</h3>
            <p className="text-gray-600 mb-6">
              Hubungi tim kami untuk informasi ekspansi layanan ke area Anda. 
              Kami akan mengutamakan area dengan permintaan tertinggi.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105">
              Hubungi Tim Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
