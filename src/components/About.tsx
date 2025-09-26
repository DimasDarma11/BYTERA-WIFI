import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Misi Kami',
      description: 'Menyediakan akses internet berkualitas tinggi yang terjangkau untuk semua kalangan, mendukung transformasi digital Indonesia.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Kepuasan pelanggan adalah prioritas utama. Kami berkomitmen memberikan layanan terbaik dengan dukungan 24/7.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Menggunakan teknologi fiber optic terdepan dan infrastruktur berkualitas tinggi untuk pengalaman internet optimal.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi dalam teknologi dan layanan untuk memberikan solusi internet terdepan di masa depan.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BYTERA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              BYTERA adalah penyedia layanan internet terdepan di Indonesia yang berkomitmen 
              menghadirkan konektivitas berkualitas tinggi dengan teknologi fiber optic modern. 
              Kami memahami pentingnya internet stabil dalam kehidupan digital modern.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className={`mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Perjalanan Kami Membangun Konektivitas Indonesia
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dimulai pada tahun 2025, BYTERA hadir dengan visi menyediakan akses internet 
                  berkualitas tinggi yang terjangkau untuk seluruh masyarakat Indonesia. Kami 
                  memulai perjalanan dari Jakarta dan kini telah melayani puluhan ribu pelanggan 
                  di berbagai kota besar.
                </p>
                <p>
                  Dengan investasi infrastruktur fiber optic senilai milyaran rupiah, kami 
                  berkomitmen menghadirkan teknologi internet terdepan yang dapat diandalkan 
                  untuk kebutuhan personal maupun bisnis.
                </p>
                <p>
                  Tim ahli kami yang berpengalaman lebih dari 10 tahun di industri telekomunikasi 
                  terus berinovasi untuk memberikan pengalaman internet terbaik bagi seluruh 
                  pelanggan BYTERA.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
                  alt="BYTERA Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {value.description}
              </p>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className={`mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-3xl font-bold mb-8">Pencapaian BYTERA</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4', suffix: ' Tahun', label: 'Pengalaman' },
              { number: '50K+', suffix: '', label: 'Pelanggan Aktif' },
              { number: '25+', suffix: '', label: 'Kota Terlayani' },
              { number: '99.9%', suffix: '', label: 'Uptime Guarantee' },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
