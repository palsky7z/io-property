# iO Property | Interior Mukomuko 🏠✨

Website resmi dan landing page profesional untuk bisnis **iO Property | Interior Mukomuko** — penyedia jasa desain interior, custom kitchen set, backdrop TV, kamar tidur, renovasi ruang komersial, dan properti siap huni di Kabupaten Mukomuko, Bengkulu.

---

## 🌟 Fitur Utama Website

1. **Desain Modern, Hangat & Mewah (Warm Japandi & Modern Minimalis)**:
   - Tampilan responsif di semua perangkat (smartphone, tablet, laptop).
   - Glassmorphism navigation bar dengan efek blur otomatis saat digulir.
2. **Katalog & Portofolio Interaktif**:
   - Filter kategori langsung (*Kitchen Set*, *Kamar Tidur*, *Living Room / Backdrop TV*, *Cafe & Toko*, *Properti Mukomuko*).
   - Modal Lightbox pop-up dengan detail spesifikasi material, dimensi, dan tombol order otomatis ke WhatsApp.
3. **Kalkulator Estimasi Biaya Interior (Simulasi RAB Transparan)**:
   - Pengunjung bisa memilih jenis ruangan, panjang/luas meter, tingkatan material HPL/Duco, dan aksesoris tambahan.
   - Hasil estimasi otomatis terhitung secara *realtime*.
   - Dilengkapi tombol 1-klik yang langsung memformat rincian estimasi tersebut ke WhatsApp bisnis Anda!
4. **Formulir Konsultasi & Survey Terintegrasi WhatsApp**:
   - Calon klien di Mukomuko bisa mengisi nama, lokasi kecamatan, jenis layanan, dan catatan survey yang langsung terkirim ke WhatsApp.
5. **Jangkauan Wilayah Lokal**:
   - Menampilkan area layanan lengkap (Kota Mukomuko, Bandar Ratu, Penarik, Lubuk Pinang, Ipuh, Selagan Raya, dll) untuk membangun kepercayaan warga lokal.
6. **FAQ Accordion & Testimoni Pelanggan**:
   - Menjawab pertanyaan umum seputar biaya survey gratis, durasi pembuatan, dan garansi purna jual.

---

## 📁 Struktur Direktori

```
io-property-mukomuko/
├── index.html              # Halaman utama landing page & katalog
├── assets/
│   ├── css/
│   │   └── style.css       # Kustomisasi CSS, typography, warna luxury gold & animasi
│   └── js/
│       └── main.js         # Logika interaktif: kalkulator RAB, modal, filter, lead generator
└── README.md               # Dokumentasi panduan penggunaan & pengaturan
```

---

## ⚙️ Cara Mengubah Nomor WhatsApp & Data Bisnis

### 1. Mengubah Nomor WhatsApp
Buka file `assets/js/main.js` pada baris awal:
```javascript
const CONFIG = {
  phone: '6281234567890', // Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx tanpa tanda +)
  businessName: 'iO Property | Interior Mukomuko',
  location: 'Kota Mukomuko, Kabupaten Mukomuko, Bengkulu'
};
```
*Catatan: Pastikan juga untuk mengganti nomor telepon pada link di `index.html` jika diperlukan.*

### 2. Menyesuaikan Tarif / Harga per Meter di Kalkulator
Buka file `assets/js/main.js` di bagian fungsi `initEstimator()`:
```javascript
let baseRate = 2100000; // Harga dasar Standard HPL (Rp 2.100.000 / meter)
if (selectedMat === 'standard') {
  baseRate = 2100000;
} else if (selectedMat === 'premium') {
  baseRate = 2650000;   // Harga HPL Tekstur Serat Kayu
} else if (selectedMat === 'luxury') {
  baseRate = 3450000;   // Harga Cat Duco / Finishing Marmer
}
```
Anda bebas mengubah angka ini sesuai dengan standar harga workshop Anda di Mukomuko.

### 3. Menambah Portofolio Baru
Di dalam file `assets/js/main.js`, Anda cukup menambahkan objek baru ke dalam array `portfolioData`:
```javascript
{
  id: 7,
  title: 'Judul Proyek Baru',
  category: 'kitchen', // Pilihan: kitchen | bedroom | living | commercial | property
  location: 'Ipuh, Mukomuko',
  duration: '12 Hari Kerja',
  material: 'Multiplex 18mm, HPL Taco Doff',
  specs: 'Panjang 3 meter',
  image: 'https://link-foto-anda.jpg',
  description: 'Deskripsi proyek...'
}
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

Anda tidak memerlukan server rumit untuk menjalankan website ini:
1. Buka folder `C:\Users\giove\.gemini\antigravity\scratch\io-property-mukomuko`.
2. Klik dua kali (double click) file `index.html` untuk langsung membukanya di browser Google Chrome / Microsoft Edge / Firefox.
3. Atau jalankan server lokal via PowerShell (opsional):
   ```powershell
   python -m http.server 8000
   ```
   Lalu buka di browser: `http://localhost:8000`.

---

## 🌐 Cara Publikasi / Online-kan Website ke Internet

Website ini berjenis *Modern Static Site* yang sangat cepat dan hemat biaya:
1. **GitHub Pages (Gratis)**:
   - Upload folder ini ke repository GitHub Anda, lalu aktifkan fitur *Pages* di menu Settings.
2. **Netlify / Vercel (Gratis & Sangat Cepat)**:
   - Drag & drop folder `io-property-mukomuko` ke [Netlify Drop](https://app.netlify.com/drop) untuk langsung mendapatkan URL live dalam 30 detik.
3. **Domain Kustom (misal: `www.ioproperty.id` atau `www.interiormukomuko.com`)**:
   - Anda dapat menyewa domain di penyedia domain Indonesia (seperti Niagahoster, DomaiNesia, Rumahweb) dan menghubungkannya ke hosting cPanel atau Netlify.
