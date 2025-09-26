import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['(021) 1234-5678', '0800-1-BYTERA'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['+62 812-3456-7890', 'Chat 24/7'],
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bytera.id', 'support@bytera.id'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Teknologi No. 123', 'Jakarta Selatan 12345'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hubungi{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim support BYTERA siap membantu Anda 24/7. Konsultasi gratis untuk 
              mendapatkan paket internet terbaik sesuai kebutuhan Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '300ms' }}>
            
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Jam Operasional</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">Customer Support</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">Sales Office</span>
                  <span className="font-medium text-gray-900">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">Technical Support</span>
                  <span className="font-medium text-blue-600">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Installation Team</span>
                  <span className="font-medium text-gray-900">08:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '500ms' }}>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dapatkan Konsultasi Gratis</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Pemasangan *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    placeholder="Alamat lengkap untuk instalasi"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan/Pertanyaan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                    placeholder="Ceritakan kebutuhan internet Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim Pesan</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Dengan mengirim pesan, Anda menyetujui untuk dihubungi oleh tim BYTERA 
                  melalui telepon atau WhatsApp untuk konsultasi gratis.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '700ms' }}>
          <a
            href="tel:+628123456789"
            className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-bold mb-2">Telepon Langsung</h3>
            <p className="opacity-90">Hubungi sekarang untuk konsultasi</p>
          </a>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <MessageSquare className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-bold mb-2">Chat WhatsApp</h3>
            <p className="opacity-90">Chat dengan customer service</p>
          </a>

          <a
            href="mailto:info@bytera.id"
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-bold mb-2">Kirim Email</h3>
            <p className="opacity-90">Email untuk pertanyaan detail</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
