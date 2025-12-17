import { ArrowLeft, Heart, Plane, Backpack, BookOpen, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PreparationProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function Preparation({ onBack, isDarkMode }: PreparationProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const categories = [
    {
      title: 'Persiapan Spiritual',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      items: [
        { id: 's1', text: 'Pelajari tata cara umrah' },
        { id: 's2', text: 'Bertaubat dari dosa-dosa' },
        { id: 's3', text: 'Minta maaf kepada keluarga dan teman' },
        { id: 's4', text: 'Perbanyak ibadah dan tadarus Al-Quran' },
        { id: 's5', text: 'Niatkan umrah karena Allah' },
      ],
    },
    {
      title: 'Dokumen Perjalanan',
      icon: Plane,
      color: 'from-blue-500 to-cyan-600',
      items: [
        { id: 'd1', text: 'Paspor (minimal 6 bulan masa berlaku)' },
        { id: 'd2', text: 'Visa umrah' },
        { id: 'd3', text: 'Tiket pesawat PP' },
        { id: 'd4', text: 'Booking hotel' },
        { id: 'd5', text: 'Asuransi perjalanan' },
        { id: 'd6', text: 'Sertifikat vaksinasi' },
      ],
    },
    {
      title: 'Barang Bawaan',
      icon: Backpack,
      color: 'from-emerald-500 to-teal-600',
      items: [
        { id: 'b1', text: 'Kain ihram (2-3 set)' },
        { id: 'b2', text: 'Sandal yang nyaman' },
        { id: 'b3', text: 'Sajadah dan Al-Quran' },
        { id: 'b4', text: 'Sabun dan toiletries tanpa pewangi' },
        { id: 'b5', text: 'Obat-obatan pribadi' },
        { id: 'b6', text: 'Tas pinggang untuk uang' },
        { id: 'b7', text: 'Payung untuk pelindung matahari' },
        { id: 'b8', text: 'Botol minum' },
      ],
    },
    {
      title: 'Ilmu & Pengetahuan',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-600',
      items: [
        { id: 'i1', text: 'Pelajari langkah-langkah umrah' },
        { id: 'i2', text: 'Hafalkan doa-doa penting' },
        { id: 'i3', text: 'Pahami larangan saat ihram' },
        { id: 'i4', text: 'Ketahui sejarah tempat-tempat suci' },
        { id: 'i5', text: 'Hafalkan Talbiyah' },
      ],
    },
  ];

  const getProgress = (items: typeof categories[0]['items']) => {
    const checked = items.filter(item => checkedItems.has(item.id)).length;
    return Math.round((checked / items.length) * 100);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Persiapan</h1>
              <p className="text-blue-100 text-sm">Checklist lengkap persiapan umrah</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          const progress = getProgress(category.items);
          
          return (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-5 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-white flex-1">{category.title}</h3>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/90">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="p-4">
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left"
                    >
                      <div className="flex-shrink-0">
                        {checkedItems.has(item.id) ? (
                          <div className="w-6 h-6 bg-emerald-500 dark:bg-emerald-600 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-lg" />
                        )}
                      </div>
                      <span className={`flex-1 ${checkedItems.has(item.id) ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300'}`}>
                        {item.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Tips */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 transition-colors">
          <h4 className="text-amber-900 dark:text-amber-300 mb-3">⚠️ Penting Diingat</h4>
          <ul className="space-y-2 text-amber-800 dark:text-amber-200 text-sm">
            <li>• Wanita harus ditemani mahram</li>
            <li>• Lunasilah hutang sebelum berangkat</li>
            <li>• Buat wasiat sebelum perjalanan (sunnah)</li>
            <li>• Tinggalkan uang yang cukup untuk keluarga</li>
            <li>• Hindari sabun atau parfum beraroma saat ihram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}