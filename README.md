# 🎮 Latsol Gamify — Kalkulus

Gamifikasi 34 soal kalkulus dari Tugas Besar 2 Calculus 2025/2026.  
Self-assessment dengan statistik live, dark mode, dan riwayat sesi.

## Fitur

- ✅ **Satu soal per halaman** — fokus tanpa distraksi
- ✅ **Aksi**: Benar, Salah, Lewati, Flag, Petunjuk (tips teknik), kotak jawaban opsional
- ✅ **Live statistik** — donut chart, bar chart per bagian, line chart harian
- ✅ **Dark mode** — persist di localStorage
- ✅ **Timer sesi** — otomatis mulai, riwayat waktu per sesi
- ✅ **Urutan** — acak / berurutan, filter per bagian (Integral, Aplikasi, Deret, Taylor)
- ✅ **Keyboard shortcuts** — `B` benar, `S` salah, `L` lewati, `F` flag, `P` petunjuk
- ✅ **Progress dots** — navigasi cepat, warna sesuai status
- ✅ **Riwayat sesi** — tabel sesi sebelumnya dengan durasi & akurasi
- ✅ **Reset data** — satu klik hapus semua progres

## Struktur File

```
├── index.html          # Dashboard — ringkasan progres, pengaturan mulai
├── quiz.html           # Halaman kuis — tampil soal + aksi
├── stats.html          # Halaman statistik — grafik + tabel detail + riwayat
├── calc_exercise.md    # Soal asli (sumber data)
├── css/
│   └── style.css       # Semua styling (light/dark, responsif)
├── js/
│   ├── questions.js    # 34 soal terstruktur + petunjuk
│   ├── storage.js      # localStorage CRUD + reset
│   ├── utils.js        # Helper (format waktu, warna status)
│   └── router.js       # Navigasi SPA sederhana
└── README.md
```

## Cara Pakai

1. Buka `index.html` di browser
2. Klik **Mulai Kuis Baru** → atur filter & urutan → mulai
3. Jawab soal di buku, cocokkan dengan AI/chatbot, lalu klik **Benar / Salah**
4. Cek progress real-time di **Dashboard** atau **Statistik**

## Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript
- [MathJax v3](https://www.mathjax.org/) — render LaTeX
- [Chart.js](https://www.chartjs.org/) — grafik interaktif
- localStorage — persistensi data

## Sumber Soal

Tugas Besar 2 — Calculus LB75 2025/2026  
Institut Teknologi Nasional (Itenas) Bandung
