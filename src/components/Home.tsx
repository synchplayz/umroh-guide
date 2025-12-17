import { MapPin, CheckCircle, BookOpen, Heart, Backpack, Map, Clock, Compass, Moon, Sun } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Home({ onNavigate, isDarkMode, onToggleDarkMode }: HomeProps) {
  const quickActions = [
    {
      id: 'guide',
      title: 'Panduan Umrah',
      description: 'Langkah-langkah melaksanakan umrah',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      view: 'guide',
    },
    {
      id: 'preparation',
      title: 'Persiapan',
      description: 'Checklist dan tips persiapan',
      icon: Backpack,
      color: 'from-blue-500 to-cyan-600',
      view: 'preparation',
    },
    {
      id: 'duas',
      title: 'Doa & Dzikir',
      description: 'Kumpulan doa saat umrah',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      view: 'duas',
    },
    {
      id: 'prayer',
      title: 'Waktu Shalat',
      description: 'Jadwal shalat Makkah & Madinah',
      icon: Clock,
      color: 'from-amber-500 to-orange-600',
      view: 'prayer',
    },
    {
      id: 'qibla',
      title: 'Arah Kiblat',
      description: 'Kompas digital arah Ka\'bah',
      icon: Compass,
      color: 'from-teal-500 to-cyan-600',
      view: 'qibla',
    },
  ];

  const umrahSteps = [
    { number: 1, title: 'Ihram', status: 'pending' },
    { number: 2, title: 'Tawaf', status: 'pending' },
    { number: 3, title: 'Sa\'i', status: 'pending' },
    { number: 4, title: 'Tahallul', status: 'pending' },
  ];

  return (
    <div className="pb-24">
      {/* Header with Gradient */}
      {/* CARA GANTI BACKGROUND: Hapus bg-gradient dan tambahkan background image */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        {/* Background Image - TAMBAHKAN INI untuk gambar background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629971138860-4ff46dfb714f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)'
          }}
        />
        {/* Overlay gelap untuk membuat teks lebih jelas */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-900/60 to-cyan-900/60" />
        
        {/* Content - TAMBAHKAN relative z-10 agar konten di atas background */}
        <div className="relative z-10 max-w-lg mx-auto px-6 pt-8 pb-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white text-3xl mb-1">Panduan Umrah</h1>
              <p className="text-emerald-100">Aplikasi lengkap untuk ibadah umrah Anda</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleDarkMode}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Compass className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-6 -mt-16 space-y-6">
        {/* Status Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-100 dark:border-slate-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-800 dark:text-slate-100">Status Umrah</h2>
            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm">
              Persiapan
            </span>
          </div>
          
          <div className="space-y-3">
            {umrahSteps.map((step) => (
              <div key={step.number} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-xl transition-colors">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <span className="flex-1 text-slate-700 dark:text-slate-200">{step.title}</span>
                <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h3 className="text-slate-800 dark:text-slate-100 mb-4">Menu Utama</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => onNavigate(action.view)}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all text-left group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-slate-800 dark:text-slate-100 mb-1">{action.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 text-white">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-1">Lokasi Penting</h4>
                <p className="text-emerald-100 text-sm">
                  Masjidil Haram, Makkah • Masjid Nabawi, Madinah
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Map className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-slate-800 dark:text-slate-100 mb-1">Peta Interaktif</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  Navigasi ke tempat-tempat penting di Makkah dan Madinah
                </p>
                <button className="text-emerald-600 dark:text-emerald-400 text-sm hover:text-emerald-700 dark:hover:text-emerald-300">
                  Lihat Peta →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 transition-colors">
          <h4 className="text-amber-900 dark:text-amber-300 mb-3">💡 Tips Hari Ini</h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            Perbanyak istighfar dan doa selama berada di tanah suci. Waktu terbaik untuk berdoa adalah saat tawaf, sa'i, dan setelah shalat fardhu.
          </p>
        </div>
      </div>
    </div>
  );
}