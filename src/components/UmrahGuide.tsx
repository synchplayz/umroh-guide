import { ArrowLeft, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

interface UmrahGuideProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function UmrahGuide({ onBack, isDarkMode }: UmrahGuideProps) {
  const steps = [
    {
      number: 1,
      title: 'Ihram',
      location: 'Miqat',
      image: '🕌',
      description: 'Memasuki keadaan ihram sebelum melewati batas Miqat',
      steps: [
        'Mandi besar (mandi junub) atau berwudhu',
        'Memakai kain ihram (2 kain putih untuk pria)',
        'Niat umrah',
        'Membaca Talbiyah: "Labbaik Allahumma Labbaik"',
      ],
      prohibitions: [
        'Tidak memakai wewangian',
        'Tidak memotong rambut atau kuku',
        'Tidak bersetubuh',
        'Tidak berburu atau membunuh hewan',
      ],
    },
    {
      number: 2,
      title: 'Tawaf',
      location: 'Masjidil Haram',
      image: '🕋',
      description: 'Mengelilingi Ka\'bah sebanyak 7 kali berlawanan arah jarum jam',
      steps: [
        'Mulai dari Hajar Aswad',
        'Angkat tangan kanan ke arah Hajar Aswad sambil membaca "Bismillah, Allahu Akbar"',
        'Mengelilingi Ka\'bah 7 kali dengan Ka\'bah di sebelah kiri',
        'Istilam (menyentuh atau mengisyaratkan) Hajar Aswad setiap putaran',
        'Pria membuka bahu kanan (Idtiba)',
        'Shalat 2 rakaat di belakang Maqam Ibrahim',
      ],
    },
    {
      number: 3,
      title: 'Sa\'i',
      location: 'Antara Safa dan Marwah',
      image: '⛰️',
      description: 'Berjalan antara bukit Safa dan Marwah sebanyak 7 kali',
      steps: [
        'Mulai dari bukit Safa',
        'Berjalan menuju Marwah (ini 1 putaran)',
        'Kembali dari Marwah ke Safa (ini putaran ke-2)',
        'Lanjutkan hingga 7 putaran, berakhir di Marwah',
        'Pria berlari kecil di antara lampu hijau',
        'Berdoa dan berdzikir selama sa\'i',
      ],
    },
    {
      number: 4,
      title: 'Tahallul',
      location: 'Di mana saja',
      image: '✂️',
      description: 'Mencukur atau memendekkan rambut untuk keluar dari ihram',
      steps: [
        'Pria: Mencukur gundul (halq) atau memendekkan rambut (taqsir)',
        'Wanita: Memotong rambut sepanjang ujung jari',
        'Umrah selesai',
        'Boleh keluar dari keadaan ihram',
      ],
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Panduan Umrah</h1>
              <p className="text-emerald-100 text-sm">4 Rukun Umrah</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
            {/* Step Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-5 text-white">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{step.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm backdrop-blur-sm">
                      {step.number}
                    </span>
                    <h3 className="text-white">{step.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{step.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-5 space-y-4">
              <p className="text-slate-700 dark:text-slate-300">{step.description}</p>

              {/* Steps */}
              <div>
                <h4 className="text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Langkah-langkah:
                </h4>
                <div className="space-y-2">
                  {step.steps.map((s, idx) => (
                    <div key={idx} className="flex gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl transition-colors">
                      <span className="text-emerald-600 dark:text-emerald-400 flex-shrink-0">{idx + 1}.</span>
                      <span className="text-slate-700 dark:text-slate-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibitions */}
              {step.prohibitions && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl p-4 transition-colors">
                  <h4 className="text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Larangan saat Ihram:
                  </h4>
                  <ul className="space-y-2">
                    {step.prohibitions.map((prohibition, idx) => (
                      <li key={idx} className="flex gap-2 text-red-700 dark:text-red-300 text-sm">
                        <span>•</span>
                        <span>{prohibition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Footer Info */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-5 text-white">
          <h4 className="text-white mb-2">✨ Setelah Selesai</h4>
          <p className="text-purple-100 text-sm">
            Setelah menyelesaikan 4 rukun ini, umrah Anda telah sempurna. Sangat dianjurkan untuk melakukan Tawaf Wada (tawaf perpisahan) sebelum meninggalkan Makkah.
          </p>
        </div>
      </div>
    </div>
  );
}