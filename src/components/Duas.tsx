import { ArrowLeft, BookOpen, Star } from 'lucide-react';

interface DuasProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function Duas({ onBack, isDarkMode }: DuasProps) {
  const duas = [
    {
      title: 'Talbiyah',
      occasion: 'Saat Memasuki Ihram',
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لاَ شَرِيكَ لَكَ',
      latin: 'Labbayk Allāhumma labbayk, labbayka lā sharīka laka labbayk, inna al-ḥamda wa n-niʿmata laka wa l-mulk, lā sharīka lak',
      arti: 'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat dan kerajaan adalah milik-Mu. Tiada sekutu bagi-Mu.',
      note: 'Dibaca berulang-ulang selama ihram',
      important: true,
    },
    {
      title: 'Doa Melihat Ka\'bah',
      occasion: 'Saat Pertama Kali Melihat Ka\'bah',
      arabic: 'اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً',
      latin: 'Allāhumma zid hādhā l-bayta tashrīfan wa taʿẓīman wa takrīman wa mahābah',
      arti: 'Ya Allah, tambahkanlah kemulian, keagungan, kehormatan dan kewibawaan bagi rumah ini (Ka\'bah).',
    },
    {
      title: 'Doa Saat Tawaf',
      occasion: 'Selama Mengelilingi Ka\'bah',
      arabic: 'سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ',
      latin: 'Subḥān Allāh wa l-ḥamdu lillāh wa lā ilāha illā Allāh wa Allāhu akbar',
      arti: 'Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, dan Allah Maha Besar.',
      note: 'Perbanyak dzikir dan doa selama tawaf',
    },
    {
      title: 'Doa di Rukun Yamani',
      occasion: 'Antara Rukun Yamani dan Hajar Aswad',
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      latin: 'Rabbanā ātinā fī d-dunyā ḥasanatan wa fī l-ākhirati ḥasanatan wa qinā ʿadhāba n-nār',
      arti: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.',
      important: true,
    },
    {
      title: 'Doa di Bukit Safa',
      occasion: 'Saat Berada di Atas Bukit Safa',
      arabic: 'اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
      latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar, lā ilāha illā Allāhu waḥdahu lā sharīka lahu',
      arti: 'Allah Maha Besar (3x). Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya.',
      note: 'Hadap Ka\'bah dan baca 3 kali',
    },
    {
      title: 'Doa Minum Zamzam',
      occasion: 'Saat Minum Air Zamzam',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ',
      latin: 'Allāhumma innī as\'aluka ʿilman nāfiʿan wa rizqan wāsiʿan wa shifā\'an min kulli dā\'',
      arti: 'Ya Allah, aku mohon kepada-Mu ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit.',
    },
    {
      title: 'Doa Setelah Selesai Umrah',
      occasion: 'Setelah Mencukur/Memotong Rambut',
      arabic: 'اللَّهُمَّ تَقَبَّلْ مِنِّي وَأَعِنِّي عَلَى طَاعَتِكَ',
      latin: 'Allāhumma taqabbal minnī wa aʿinnī ʿalā ṭāʿatik',
      arti: 'Ya Allah, terimalah dariku dan tolonglah aku dalam ketaatan kepada-Mu.',
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Doa & Dzikir</h1>
              <p className="text-purple-100 text-sm">Kumpulan doa saat umrah</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {duas.map((dua, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
            {/* Header */}
            <div className={`p-5 ${dua.important ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-emerald-500 to-teal-600'} text-white`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <h3 className="text-white">{dua.title}</h3>
                </div>
                {dua.important && <Star className="w-5 h-5 fill-white" />}
              </div>
              <p className={`text-sm ${dua.important ? 'text-amber-100' : 'text-emerald-100'}`}>
                {dua.occasion}
              </p>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Arabic */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800 transition-colors">
                <p className="text-right text-2xl leading-loose" dir="rtl" lang="ar">
                  {dua.arabic}
                </p>
              </div>

              {/* Latin */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 transition-colors">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">{dua.latin}</p>
              </div>

              {/* Translation */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 transition-colors">
                <p className="text-blue-900 dark:text-blue-200 leading-relaxed">
                  <span className="text-blue-700 dark:text-blue-300">Artinya:</span> {dua.arti}
                </p>
              </div>

              {/* Note */}
              {dua.note && (
                <div className="flex gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 transition-colors">
                  <span className="text-amber-600 dark:text-amber-400">💡</span>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">{dua.note}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Tips */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-5 text-white">
          <h4 className="text-white mb-3">📖 Tips Berdoa</h4>
          <ul className="space-y-2 text-blue-50 text-sm">
            <li>• Berdoa dengan bahasa sendiri juga diperbolehkan</li>
            <li>• Doakan keluarga, teman, dan seluruh umat Islam</li>
            <li>• Perbanyak istighfar dan shalawat kepada Nabi ﷺ</li>
            <li>• Baca Al-Quran secara rutin</li>
            <li>• Manfaatkan waktu-waktu mustajab untuk berdoa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}