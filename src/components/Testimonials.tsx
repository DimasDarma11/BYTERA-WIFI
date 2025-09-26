import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Content Creator',
      location: 'Jakarta Selatan',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'BYTERA luar biasa! Kecepatan internet 100 Mbps benar-benar stabil untuk streaming dan upload video 4K. Customer service juga responsif banget, masalah langsung ditangani.',
    },
    {
      name: 'Sarah Amanda',
      role: 'Remote Worker',
      location: 'Depok',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Sejak pakai BYTERA, work from home jadi lebih produktif. Video conference lancar tanpa lag, download file besar cepat banget. Worth it banget harganya!',
    },
    {
      name: 'Ridwan Hakim',
      role: 'Gamer',
      location: 'Tangerang',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Ping rendah, koneksi stabil, perfect untuk gaming online! Dulu sering lag, sekarang bisa main ranking tanpa khawatir disconnect. BYTERA recommended!',
    },
    {
      name: 'Indira Putri',
      role: 'Online Shop Owner',
      location: 'Bogor',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Bisnis online jadi lancar dengan BYTERA. Upload produk, live streaming, video call sama supplier semua lancar. Investasi terbaik untuk bisnis!',
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Mahasiswa',
      location: 'Bekasi',
      avatar: 'https://images.pexels.com/photos/1832323/pexels-photo-1832323.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Kuliah online jadi nyaman, zoom meeting jernih, download materi kuliah cepat. Harga student-friendly tapi kualitas premium. Makasih BYTERA!',
    },
    {
      name: 'Maya Sari',
      role: 'Freelancer Designer',
      location: 'Jakarta Barat',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Upload design file ke client jadi super cepat. Backup data ke cloud storage juga lancar. BYTERA bikin workflow design jadi lebih efisien!',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kata{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pelanggan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ribuan pelanggan telah merasakan pengalaman internet terbaik dengan BYTERA. 
              Inilah cerita mereka
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '300ms' }}>
          
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-100" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentSlide].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
          {[
            { number: '50,000+', label: 'Pelanggan Aktif', icon: '👥' },
            { number: '4.9/5', label: 'Rating Kepuasan', icon: '⭐' },
            { number: '99.9%', label: 'Uptime Guarantee', icon: '🛡️' },
            { number: '24/7', label: 'Customer Support', icon: '📞' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
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

export default Testimonials;
