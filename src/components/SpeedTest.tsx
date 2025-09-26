import React, { useEffect, useRef, useState } from 'react';
import { Gauge, Download, Upload, Activity } from 'lucide-react';

const SpeedTest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTestingDownload, setIsTestingDownload] = useState(false);
  const [isTestingUpload, setIsTestingUpload] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
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

  const startSpeedTest = async () => {
    // Simulate speed test
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setPing(0);
    
    // Test ping first
    setPing(Math.floor(Math.random() * 20) + 10);
    
    // Test download speed
    setIsTestingDownload(true);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setDownloadSpeed(Math.floor(Math.random() * 100) + 50);
    }
    setIsTestingDownload(false);
    
    // Test upload speed
    setIsTestingUpload(true);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setUploadSpeed(Math.floor(Math.random() * 80) + 40);
    }
    setIsTestingUpload(false);
  };

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Test{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kecepatan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cek kecepatan internet Anda saat ini dan bandingkan dengan paket BYTERA 
              untuk mendapatkan pengalaman internet terbaik
            </p>
          </div>
        </div>

        {/* Speed Test Interface */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
            
            {/* Main Speed Display */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      stroke="rgb(229, 231, 235)"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    {/* Speed arc */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${(downloadSpeed / 100) * 565} 565`}
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Gauge className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-3xl font-bold text-gray-900">
                      {isTestingDownload ? downloadSpeed : downloadSpeed || '--'}
                    </div>
                    <div className="text-sm text-gray-600">Mbps</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Download className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {isTestingDownload ? `${downloadSpeed}` : downloadSpeed || '--'}
                </div>
                <div className="text-sm text-gray-600">Download</div>
                <div className="text-xs text-gray-500">Mbps</div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {isTestingUpload ? `${uploadSpeed}` : uploadSpeed || '--'}
                </div>
                <div className="text-sm text-gray-600">Upload</div>
                <div className="text-xs text-gray-500">Mbps</div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Activity className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {ping || '--'}
                </div>
                <div className="text-sm text-gray-600">Ping</div>
                <div className="text-xs text-gray-500">ms</div>
              </div>
            </div>

            {/* Test Button */}
            <div className="text-center">
              <button
                onClick={startSpeedTest}
                disabled={isTestingDownload || isTestingUpload}
                className={`px-12 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isTestingDownload || isTestingUpload
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-200'
                }`}
              >
                {isTestingDownload || isTestingUpload ? 'Testing...' : 'Mulai Test Kecepatan'}
              </button>
            </div>
          </div>
        </div>

        {/* Speed Comparison */}
        <div className={`mt-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🚀 Upgrade ke BYTERA untuk Kecepatan Optimal!</h3>
            <p className="text-lg opacity-90 mb-6">
              Dapatkan kecepatan hingga 1 Gbps dengan teknologi fiber optic terdepan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Lihat Paket Internet
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedTest;
