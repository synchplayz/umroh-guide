import { ArrowLeft, Clock, MapPin, Sun, Sunset, Moon } from 'lucide-react';
import { useState } from 'react';

interface PrayerTimesProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function PrayerTimes({ onBack, isDarkMode }: PrayerTimesProps) {
  const [selectedCity, setSelectedCity] = useState<'makkah' | 'madinah'>('makkah');

  const prayerTimes = {
    makkah: [
      { name: 'Subuh', time: '05:23', icon: Sun, passed: true },
      { name: 'Dzuhur', time: '12:19', icon: Sun, passed: true },
      { name: 'Ashar', time: '15:38', icon: Sunset, passed: false },
      { name: 'Maghrib', time: '18:02', icon: Sunset, passed: false },
      { name: 'Isya', time: '19:32', icon: Moon, passed: false },
    ],
    madinah: [
      { name: 'Subuh', time: '05:31', icon: Sun, passed: true },
      { name: 'Dzuhur', time: '12:26', icon: Sun, passed: true },
      { name: 'Ashar', time: '15:42', icon: Sunset, passed: false },
      { name: 'Maghrib', time: '18:05', icon: Sunset, passed: false },
      { name: 'Isya', time: '19:35', icon: Moon, passed: false },
    ],
  };

  const currentTime = '14:30';
  const currentDate = 'Selasa, 16 Desember 2025';

  const cities = [
    { id: 'makkah' as const, name: 'Makkah', desc: 'Masjidil Haram' },
    { id: 'madinah' as const, name: 'Madinah', desc: 'Masjid Nabawi' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Waktu Shalat</h1>
              <p className="text-amber-100 text-sm">{currentDate}</p>
            </div>
          </div>

          {/* City Selector */}
          <div className="flex gap-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`flex-1 p-4 rounded-xl transition-all ${
                  selectedCity === city.id
                    ? 'bg-white text-amber-700'
                    : 'bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center gap-2 justify-center mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{city.name}</span>
                </div>
                <p className={`text-xs ${selectedCity === city.id ? 'text-amber-600' : 'text-amber-100'}`}>
                  {city.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {/* Current Time */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 text-center transition-colors">
          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Waktu Sekarang</span>
          </div>
          <div className="text-5xl text-slate-800 dark:text-slate-100 mb-1">{currentTime}</div>
          <p className="text-emerald-600 dark:text-emerald-400">Waktu Lokal {selectedCity === 'makkah' ? 'Makkah' : 'Madinah'}</p>
        </div>

        {/* Prayer Times */}
        <div className="space-y-3">
          {prayerTimes[selectedCity].map((prayer, index) => {
            const Icon = prayer.icon;
            const isNext = index === 2; // Ashar is next
            
            return (
              <div
                key={prayer.name}
                className={`rounded-2xl shadow-sm border overflow-hidden transition-all ${
                  isNext
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-600 scale-105'
                    : prayer.passed
                    ? 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isNext
                          ? 'bg-white/20 backdrop-blur-sm'
                          : prayer.passed
                          ? 'bg-slate-200 dark:bg-slate-700'
                          : 'bg-emerald-100 dark:bg-emerald-900/50'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isNext ? 'text-white' : prayer.passed ? 'text-slate-400 dark:text-slate-500' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`mb-1 ${
                          isNext ? 'text-white' : prayer.passed ? 'text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-100'
                        }`}>
                          {prayer.name}
                        </h3>
                        {isNext && (
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white backdrop-blur-sm">
                            Shalat Berikutnya
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`text-2xl ${
                      isNext ? 'text-white' : prayer.passed ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'
                    }`}>
                      {prayer.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 transition-colors">
          <h4 className="text-blue-900 dark:text-blue-300 mb-3">ℹ️ Informasi</h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>• Waktu shalat disesuaikan dengan waktu lokal setempat</li>
            <li>• Pastikan selalu mengikuti waktu shalat yang berlaku</li>
            <li>• Datang lebih awal untuk mendapatkan tempat shalat yang baik</li>
            <li>• Masjidil Haram dan Masjid Nabawi buka 24 jam</li>
          </ul>
        </div>

        {/* Reminder */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-5 text-white">
          <h4 className="text-white mb-2">🕌 Keutamaan Shalat di Masjidil Haram</h4>
          <p className="text-purple-100 text-sm">
            Satu shalat di Masjidil Haram bernilai 100,000 kali lipat dari shalat di tempat lain. Manfaatkan kesempatan berharga ini dengan sebaik-baiknya.
          </p>
        </div>
      </div>
    </div>
  );
}