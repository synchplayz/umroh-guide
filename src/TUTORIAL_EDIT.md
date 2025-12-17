# 📚 TUTORIAL EDIT APLIKASI UMRAH

## 🎯 Cara Mengganti Background dengan Gambar

### Metode 1: Background Image pada Header (MUDAH)

```jsx
// STRUKTUR DASAR:
<div className="relative bg-gradient-to-br from-emerald-600 to-cyan-600 overflow-hidden">
  {/* 1. Layer Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage: 'url(URL_GAMBAR_ANDA)'
    }}
  />
  
  {/* 2. Layer Overlay (opsional, untuk membuat teks lebih jelas) */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-cyan-900/60" />
  
  {/* 3. Content harus punya relative z-10 */}
  <div className="relative z-10">
    <h1>Konten Anda</h1>
  </div>
</div>
```

**Penjelasan:**
- `relative` = Container utama, posisi relative
- `absolute inset-0` = Gambar mengisi seluruh area
- `bg-cover bg-center` = Gambar menutupi area & terpusat
- `opacity-30` = Transparansi gambar (0-100, makin besar makin terlihat)
- `z-10` = Konten di atas gambar

---

### Metode 2: Background Pattern/Texture

```jsx
<div 
  className="bg-slate-50 dark:bg-slate-900"
  style={{
    backgroundImage: 'url(https://URL_PATTERN)',
    backgroundRepeat: 'repeat',
    backgroundSize: '200px'
  }}
>
  Konten Anda
</div>
```

---

### Metode 3: Background Full Screen

```jsx
// Di file App.tsx
<div 
  className="min-h-screen transition-colors"
  style={{
    backgroundImage: 'url(URL_GAMBAR)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' // Gambar tidak scroll
  }}
>
  {renderView()}
</div>
```

---

## 🖼️ Cara Mendapatkan URL Gambar

### Dari Unsplash (Gratis):
1. Kunjungi unsplash.com
2. Cari gambar (contoh: "islamic pattern", "kaaba", "mosque")
3. Klik kanan gambar → Copy Image Address
4. Gunakan URL tersebut

**Contoh URL Unsplash yang bagus:**
- Ka'bah: `https://images.unsplash.com/photo-1629971138860-4ff46dfb714f`
- Islamic Pattern: `https://images.unsplash.com/photo-1719194981414-473883b3caf6`
- Masjid: `https://images.unsplash.com/photo-1564769610819-34ed2f1c2e25`

---

## ✏️ Cara Edit Warna & Style

### Ganti Warna Gradient:

```jsx
// SEBELUM:
className="bg-gradient-to-br from-emerald-600 to-teal-600"

// SESUDAH (contoh warna biru):
className="bg-gradient-to-br from-blue-600 to-indigo-600"

// Pilihan warna lain:
// Hijau: from-emerald-600 to-teal-600
// Biru: from-blue-600 to-cyan-600
// Ungu: from-purple-600 to-pink-600
// Oranye: from-orange-600 to-red-600
// Coklat: from-amber-600 to-orange-800
```

### Ganti Ukuran Teks:

```jsx
// Ukuran heading:
className="text-3xl"  // Extra large
className="text-2xl"  // Large
className="text-xl"   // Medium
className="text-lg"   // Small

// Ukuran teks biasa:
className="text-base" // Normal
className="text-sm"   // Small
className="text-xs"   // Extra small
```

### Ganti Border Radius (Sudut):

```jsx
className="rounded-2xl"  // Sangat bulat
className="rounded-xl"   // Bulat
className="rounded-lg"   // Sedikit bulat
className="rounded-md"   // Minimal
className="rounded-full" // Lingkaran sempurna
```

---

## 🔧 Cara Menambah Fitur Baru

### Langkah-langkah menambah halaman baru:

#### 1. Buat File Komponen Baru
```bash
/components/NamaFiturBaru.tsx
```

#### 2. Template Komponen:
```jsx
import { ArrowLeft } from 'lucide-react';

interface NamaFiturBaruProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export function NamaFiturBaru({ onBack, isDarkMode }: NamaFiturBaruProps) {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white text-2xl">Judul Halaman</h1>
              <p className="text-emerald-100 text-sm">Deskripsi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
          <h2 className="text-slate-800 dark:text-slate-100 mb-4">Konten</h2>
          <p className="text-slate-600 dark:text-slate-400">Isi konten disini</p>
        </div>
      </div>
    </div>
  );
}
```

#### 3. Edit App.tsx:

**A. Tambah Import:**
```jsx
import { NamaFiturBaru } from './components/NamaFiturBaru';
import { Icon } from 'lucide-react'; // Pilih icon yang sesuai
```

**B. Tambah Case di renderView:**
```jsx
case 'nama-fitur':
  return <NamaFiturBaru onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
```

**C. Tambah Button di Bottom Navigation:**
```jsx
<button
  onClick={() => setCurrentView('nama-fitur')}
  className={`flex flex-col items-center gap-1 py-3 px-6 transition-colors ${
    currentView === 'nama-fitur' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
  }`}
>
  <Icon className="w-6 h-6" />
  <span className="text-xs">Label</span>
</button>
```

---

## 🎨 Cara Menggunakan Icon

### Import Icon dari Lucide:
```jsx
import { Home, User, Settings, Bell, Search } from 'lucide-react';

// Gunakan:
<Home className="w-6 h-6" />
<User className="w-5 h-5 text-blue-600" />
```

**Icon Populer untuk Aplikasi Umrah:**
- `MapPin` = Lokasi
- `Compass` = Kompas/Kiblat
- `BookOpen` = Buku/Panduan
- `Heart` = Favorit/Doa
- `Clock` = Waktu
- `Calendar` = Kalender
- `Star` = Bintang/Favorit
- `Navigation` = Navigasi
- `Map` = Peta

Cek semua icon di: https://lucide.dev/icons

---

## 💡 Tips & Tricks

### 1. Dark Mode Classes:
Selalu tambahkan `dark:` untuk style dark mode
```jsx
className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
```

### 2. Responsive Design:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 kolom
// Tablet: 2 kolom
// Desktop: 3 kolom
```

### 3. Animasi & Transition:
```jsx
className="transition-all duration-300 hover:scale-105"
// Smooth animation saat hover
```

### 4. Spacing:
```jsx
className="p-4"   // Padding semua sisi
className="px-4"  // Padding horizontal
className="py-4"  // Padding vertikal
className="pt-4"  // Padding top
className="gap-4" // Jarak antar element di flex/grid
className="space-y-4" // Jarak vertikal antar child
```

---

## 🐛 Debugging / Cara Fixing Error

### Error: "Module not found"
**Solusi:** Pastikan import path benar
```jsx
// ✅ BENAR:
import { Home } from './components/Home';

// ❌ SALAH:
import { Home } from './Home';
import { Home } from 'components/Home';
```

### Error: "Cannot read property"
**Solusi:** Cek apakah props sudah diterima dengan benar
```jsx
// Pastikan interface & props match:
interface Props {
  onBack: () => void;
}

export function Component({ onBack }: Props) {
  // ...
}
```

### UI Tidak Berubah?
**Solusi:**
1. Simpan file (Ctrl+S / Cmd+S)
2. Refresh browser
3. Cek console untuk error (F12)

---

## 📝 Cheat Sheet: Class Tailwind Umum

```
WARNA:
bg-emerald-500    = Background hijau
text-blue-600     = Text biru
border-red-500    = Border merah

UKURAN:
w-full  = Width 100%
h-screen = Height full screen
max-w-lg = Max width large

LAYOUT:
flex = Flexbox
grid = Grid
flex-col = Flex vertikal
items-center = Center vertikal
justify-between = Space between

SHADOW & BORDER:
shadow-lg = Shadow besar
rounded-xl = Border radius
border-2 = Border 2px

SPACING:
m-4 = Margin
p-4 = Padding
gap-4 = Gap dalam flex/grid
```

---

## 🚀 Latihan: Ubah Tampilan

### Latihan 1: Ganti warna tema
Di `/components/Home.tsx`, ganti semua `emerald` dengan `blue`

### Latihan 2: Tambah card baru
Di halaman Home, tambah card info baru di bawah "Tips Hari Ini"

### Latihan 3: Ubah icon
Ganti icon Kiblat dari Compass ke Navigation

---

**Selamat belajar! 🎉**
Jika ada error atau pertanyaan, lihat console browser (tekan F12)
