const questions = [
  // ===== PART 1: TEKNIK INTEGRAL (LO2, 30 poin) =====
  {
    id: "1a", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int_0^1 \\frac{x+2}{(x^2+4x+1)^2} \\, dx",
    petunjuk: "Coba substitusi u = x^2 + 4x + 1"
  },
  {
    id: "1b", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{(\\sqrt{x}+4)^2}{\\sqrt{x}} \\, dx",
    petunjuk: "Ekspansikan (√x + 4)² lalu bagi dengan √x"
  },
  {
    id: "1c", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int e^x \\sin x \\, dx",
    petunjuk: "Gunakan integral parsial dua kali (cyclic)"
  },
  {
    id: "1d", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int x^5 \\sqrt{x^3 + 4} \\, dx",
    petunjuk: "Substitusi u = x^3 + 4"
  },
  {
    id: "1e", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\sin\\sqrt{1-x}}{\\sqrt{1-x}} \\, dx",
    petunjuk: "Substitusi u = √(1-x)"
  },
  {
    id: "1f", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\ln x}{x^2} \\, dx",
    petunjuk: "Integral parsial: u = ln x, dv = 1/x² dx"
  },
  {
    id: "1g", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\sin\\sqrt{1-x}}{\\sqrt{1-x}} \\, dx",
    petunjuk: "Substitusi u = √(1-x) — identik dengan 1e"
  },
  {
    id: "1h", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\ln x}{x^2} \\, dx",
    petunjuk: "Integral parsial: u = ln x, dv = 1/x² dx — identik dengan 1f"
  },
  {
    id: "1i", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\sin(4x-1)}{1-\\sin^2(4x-1)} \\, dx",
    petunjuk: "Ingat 1 - sin²θ = cos²θ, lalu substitusi u = cos(4x-1)"
  },
  {
    id: "1j", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\sqrt{x} \\ln x \\, dx",
    petunjuk: "Integral parsial: u = ln x, dv = √x dx"
  },
  {
    id: "1k", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int_0^\\pi \\cos x \\sinh x \\, dx",
    petunjuk: "Integral parsial dua kali (cyclic dengan cos x dan sinh x)"
  },
  {
    id: "1l", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int_0^{\\pi/2} \\cos^5\\theta \\, d\\theta",
    petunjuk: "Gunakan identitas cos²θ = 1 - sin²θ, substitusi u = sin θ"
  },
  {
    id: "1m", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\sin^5 4x \\cos^2 4x \\, dx",
    petunjuk: "Gunakan sin²θ = 1 - cos²θ, lalu substitusi u = cos 4x"
  },
  {
    id: "1n", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{1}{\\sqrt{9+x^2}} \\, dx",
    petunjuk: "Substitusi trigonometri: x = 3 tan θ"
  },
  {
    id: "1o", part: 1, partName: "Teknik Integral", lo: "LO2", poin: 2, tipe: "math",
    soal: "\\int \\frac{\\sqrt{4-x^2}}{x} \\, dx",
    petunjuk: "Substitusi trigonometri: x = 2 sin θ"
  },

  // ===== PART 2: APLIKASI INTEGRAL (LO2, 25 poin) =====
  {
    id: "2a", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 5, tipe: "text",
    soal: "Gambarlah daerah R yang dibatasi oleh y = x√x, x = 1, x = 4, dan y = 0. Hitunglah:\n\ni. Luas R\nii. Panjang kurva y\niii. Volume jika R diputar mengelilingi sumbu x\niv. Volume jika R diputar mengelilingi y = -1",
    petunjuk: "Gunakan rumus luas, panjang kurva, dan volume rotasi (cakram/cincin)"
  },
  {
    id: "2b", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 4, tipe: "text",
    soal: "Sketsalah daerah yang dibatasi oleh kurva 4y² − 2x = 0 dan 4y² + 4x − 12 = 0. Lalu hitung luas daerah tersebut.",
    petunjuk: "Cari titik potong kedua kurva, gunakan integral terhadap y"
  },
  {
    id: "2c", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 4, tipe: "text",
    soal: "Sketsalah daerah yang dibatasi oleh x = 2√y, y = 4, x = 0. Tentukan volume benda solid jika diputar mengelilingi sumbu-y.",
    petunjuk: "Gunakan metode cakram: V = π ∫ x² dy"
  },
  {
    id: "2d", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 4, tipe: "text",
    soal: "Sketsalah daerah yang dibatasi oleh x = 4y⁴ dan x = 8 − 4y⁴. Lalu hitung luas daerah tersebut.",
    petunjuk: "Cari titik potong, lalu integralkan selisih fungsi terhadap y"
  },
  {
    id: "2e", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 4, tipe: "text",
    soal: "Sketsalah daerah yang dibatasi oleh x = 2/y, y = 2, y = 6, x = 0. Tentukan volume benda solid jika diputar mengelilingi sumbu-y.",
    petunjuk: "Metode cakram: V = π ∫ (2/y)² dy dari y = 2 ke y = 6"
  },
  {
    id: "2f", part: 2, partName: "Aplikasi Integral", lo: "LO2", poin: 4, tipe: "text",
    soal: "Sketsalah daerah yang dibatasi oleh xy = 1, y = 0, x = 1, x = 2. Tentukan volume benda solid jika diputar mengelilingi y = −1.",
    petunjuk: "Metode cincin: V = π ∫ [(y_atas+1)² − (y_bawah+1)²] dx"
  },

  // ===== PART 3: DERET DAN KEKONVERGENAN (LO3, 30 poin) =====
  {
    id: "3ai", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\frac{\\ln 2}{2^2} + \\frac{\\ln 3}{3^2} + \\frac{\\ln 4}{4^2} + \\frac{\\ln 5}{5^2} + \\ldots",
    petunjuk: "Coba uji dengan Integral Test atau Perbandingan Langsung"
  },
  {
    id: "3aii", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{k=1}^{\\infty} \\frac{k^2}{e^k}",
    petunjuk: "Gunakan Uji Rasio (Ratio Test)"
  },
  {
    id: "3aiii", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{k=1}^{\\infty} \\frac{k}{e^{3k^2}}",
    petunjuk: "Gunakan Uji Rasio atau Uji Integral"
  },
  {
    id: "3aiv", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}",
    petunjuk: "Gunakan Uji Rasio — limitnya menuju 0"
  },
  {
    id: "3av", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} \\frac{n!}{n^{100}}",
    petunjuk: "Gunakan Uji Rasio — faktorial tumbuh lebih cepat"
  },
  {
    id: "3avi", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} \\frac{n^3}{(2n)!}",
    petunjuk: "Gunakan Uji Rasio"
  },
  {
    id: "3bi", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{n}{n^2+1}",
    petunjuk: "Deret berganti tanda. Cek konvergen mutlak/bersyarat dengan Uji Deret Berganti Tanda + Uji Perbandingan"
  },
  {
    id: "3bii", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{n^4}{2^n}",
    petunjuk: "Uji Rasio untuk konvergen mutlak terlebih dahulu"
  },
  {
    id: "3biii", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{n^2}{e^n}",
    petunjuk: "Uji Rasio untuk konvergen mutlak"
  },
  {
    id: "3biv", part: 3, partName: "Deret dan Kekonvergenan", lo: "LO3", poin: 3, tipe: "math",
    soal: "\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{1}{\\sqrt{n^2-1}}",
    petunjuk: "Deret berganti tanda. Cek dengan Uji Deret Berganti Tanda — divergen untuk nilai mutlak"
  },

  // ===== PART 4: DERET TAYLOR & MACLAURIN (LO4, 15 poin) =====
  {
    id: "4a", part: 4, partName: "Deret Taylor & Maclaurin", lo: "LO4", poin: 5, tipe: "text",
    soal: "Perderetkan f(x) = √x dengan deret Taylor minimal sampai orde ke-3 (turunan ke-3) dengan pusat x = 2.",
    petunjuk: "Hitung f(2), f'(2), f''(2), f'''(2) lalu masukkan ke rumus deret Taylor"
  },
  {
    id: "4b", part: 4, partName: "Deret Taylor & Maclaurin", lo: "LO4", poin: 5, tipe: "text",
    soal: "Perderetkan f(x) = tan⁻¹x dengan deret Maclaurin minimal sampai orde ke-4 (turunan ke-4).",
    petunjuk: "Gunakan turunan berulang tan⁻¹x atau gunakan deret 1/(1+x²) lalu integralkan"
  },
  {
    id: "4c", part: 4, partName: "Deret Taylor & Maclaurin", lo: "LO4", poin: 5, tipe: "text",
    soal: "Perderetkan f(x) = cot⁻¹x dengan deret Taylor minimal sampai orde ke-3 (turunan ke-3) dengan pusat x = 1.",
    petunjuk: "Hitung f(1), f'(1), f''(1), f'''(1) — ingat turunan cot⁻¹x = −1/(1+x²)"
  }
];
