import { ArrowLeft, Navigation, MapPin, Compass as CompassIcon, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QiblaProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function Qibla({ onBack, isDarkMode }: QiblaProps) {
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [deviceHeading, setDeviceHeading] = useState(0);
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Koordinat Ka'bah
  const KAABA_LAT = 21.4225;
  const KAABA_LON = 39.8262;

  // Hitung arah kiblat
  const calculateQibla = (lat: number, lon: number) => {
    const φ1 = (lat * Math.PI) / 180;
    const φ2 = (KAABA_LAT * Math.PI) / 180;
    const Δλ = ((KAABA_LON - lon) * Math.PI) / 180;

    const y = Math.sin(Δλ);
    const x = Math.cos(φ1) * Math.tan(φ2) - Math.sin(φ1) * Math.cos(Δλ);
    let θ = Math.atan2(y, x);
    θ = (θ * 180) / Math.PI;
    θ = (θ + 360) % 360;

    return θ;
  };

  useEffect(() => {
    // Default lokasi (Jakarta) jika gagal mendapat lokasi
    const setDefaultLocation = () => {
      const defaultLat = -6.2088;
      const defaultLon = 106.8456;
      setUserLocation({ lat: defaultLat, lon: defaultLon });
      const direction = calculateQibla(defaultLat, defaultLon);
      setQiblaDirection(direction);
      setIsLoading(false);
    };

    // Minta izin lokasi
    if ('geolocation' in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
          const direction = calculateQibla(latitude, longitude);
          setQiblaDirection(direction);
          setLocationPermission('granted');
          setErrorMessage('');
          setIsLoading(false);
        },
        (error) => {
          console.warn('Geolocation error:', error.message);
          
          // Handle different error types
          switch(error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage('Izin lokasi ditolak. Menggunakan lokasi default (Jakarta).');
              setLocationPermission('denied');
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage('Lokasi tidak tersedia. Menggunakan lokasi default (Jakarta).');
              break;
            case error.TIMEOUT:
              setErrorMessage('Waktu habis. Menggunakan lokasi default (Jakarta).');
              break;
            default:
              setErrorMessage('Tidak dapat mengambil lokasi. Menggunakan lokasi default (Jakarta).');
          }
          
          setDefaultLocation();
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setErrorMessage('Browser tidak mendukung geolokasi. Menggunakan lokasi default (Jakarta).');
      setDefaultLocation();
    }

    // Kompas (jika tersedia)
    if ('DeviceOrientationEvent' in window) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.alpha !== null) {
          setDeviceHeading(360 - event.alpha);
        }
      };

      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, []);

  const compassRotation = deviceHeading - qiblaDirection;

  const cities = [
    { name: 'Jakarta', lat: -6.2088, lon: 106.8456, qibla: '295°' },
    { name: 'Surabaya', lat: -7.2575, lon: 112.7521, qibla: '294°' },
    { name: 'Bandung', lat: -6.9175, lon: 107.6191, qibla: '295°' },
    { name: 'Medan', lat: 3.5952, lon: 98.6722, qibla: '291°' },
    { name: 'Makassar', lat: -5.1477, lon: 119.4327, qibla: '285°' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Arah Kiblat</h1>
              <p className="text-teal-100 text-sm">Temukan arah Ka'bah dari lokasi Anda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-6">
        {/* Error/Info Message */}
        {errorMessage && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 transition-colors">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-800 dark:text-blue-200 text-sm">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 transition-colors">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 dark:border-emerald-400 mb-4"></div>
              <p className="text-slate-600 dark:text-slate-400">Mendeteksi lokasi Anda...</p>
            </div>
          </div>
        )}

        {/* Kompas Digital */}
        {!isLoading && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 transition-colors">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-full border-4 border-teal-200 dark:border-teal-700"></div>
              
              {/* Compass Markings */}
              <div className="absolute inset-0">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((degree) => (
                  <div
                    key={degree}
                    className="absolute top-1/2 left-1/2 w-1 h-full origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${degree}deg)`,
                    }}
                  >
                    <div className="w-1 h-3 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
                  </div>
                ))}
              </div>

              {/* Direction Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-slate-700 dark:text-slate-300">U</div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700 dark:text-slate-300">T</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-700 dark:text-slate-300">S</div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 dark:text-slate-300">B</div>

              {/* Rotating Compass Needle */}
              <div
                className="absolute inset-0 transition-transform duration-300"
                style={{ transform: `rotate(${-compassRotation}deg)` }}
              >
                {/* Needle pointing to Qibla */}
                <div className="absolute top-1/2 left-1/2 w-2 h-1/2 -translate-x-1/2 -translate-y-full origin-bottom">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-b-[80px] border-l-transparent border-r-transparent border-b-emerald-500 mx-auto"></div>
                </div>
                {/* Back of needle */}
                <div className="absolute top-1/2 left-1/2 w-2 h-1/2 -translate-x-1/2 origin-top">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-[60px] border-l-transparent border-r-transparent border-t-red-400 mx-auto"></div>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-slate-700 dark:bg-slate-300 rounded-full border-4 border-white dark:border-slate-800"></div>

              {/* Ka'bah Icon */}
              <div
                className="absolute top-8 left-1/2 -translate-x-1/2 transition-transform duration-300"
                style={{ transform: `translateX(-50%) rotate(${-compassRotation}deg)` }}
              >
                <div className="text-4xl">🕋</div>
              </div>
            </div>

            {/* Direction Info */}
            <div className="text-center mt-6">
              <div className="text-slate-600 dark:text-slate-400 text-sm mb-2">Arah Kiblat</div>
              <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-1">
                {Math.round(qiblaDirection)}°
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {locationPermission === 'granted' 
                  ? 'Berdasarkan lokasi Anda saat ini'
                  : userLocation 
                    ? `Lokasi: ${userLocation.lat > 0 ? 'Jakarta' : 'Default'}`
                    : 'Menggunakan lokasi default'}
              </p>
            </div>
          </div>
        )}

        {/* Request Permission Button */}
        {locationPermission === 'denied' && !isLoading && (
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-4 hover:from-emerald-600 hover:to-teal-700 transition-all shadow-sm"
          >
            🔄 Coba Aktifkan Lokasi Lagi
          </button>
        )}

        {/* Location Info */}
        {userLocation && !isLoading && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-emerald-900 dark:text-emerald-300">Lokasi Anda</h4>
            </div>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm">
              Lat: {userLocation.lat.toFixed(4)}°, Lon: {userLocation.lon.toFixed(4)}°
            </p>
          </div>
        )}

        {/* Cities Reference */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-5 transition-colors">
          <h4 className="text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <CompassIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            Arah Kiblat Kota-kota Besar
          </h4>
          <div className="space-y-3">
            {cities.map((city) => (
              <div key={city.name} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <span className="text-slate-700 dark:text-slate-300">{city.name}</span>
                <span className="text-teal-600 dark:text-teal-400">{city.qibla}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 transition-colors">
          <h4 className="text-blue-900 dark:text-blue-300 mb-3">📱 Cara Menggunakan</h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>• Letakkan ponsel rata di permukaan datar</li>
            <li>• Izinkan akses lokasi untuk hasil akurat</li>
            <li>• Putar ponsel hingga panah hijau menunjuk ke depan</li>
            <li>• Arah tersebut adalah arah kiblat</li>
            <li>• Kompas digital akan menyesuaikan dengan orientasi perangkat</li>
          </ul>
        </div>

        {/* Info */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-5 text-white">
          <h4 className="text-white mb-2">🕋 Tentang Ka'bah</h4>
          <p className="text-purple-100 text-sm">
            Ka'bah terletak di Masjidil Haram, Makkah, Arab Saudi pada koordinat 21.4225°N, 39.8262°E. 
            Umat Islam di seluruh dunia menghadap ke arah ini saat melaksanakan shalat.
          </p>
        </div>
      </div>
    </div>
  );
}