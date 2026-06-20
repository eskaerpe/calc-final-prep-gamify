const STORAGE_PROGRES = "latsol_progres";
const STORAGE_PENGATURAN = "latsol_pengaturan";
const STORAGE_SESI = "latsol_sesi";

function getProgres() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PROGRES)) || {};
  } catch {
    return {};
  }
}

function simpanProgres(progres) {
  try { localStorage.setItem(STORAGE_PROGRES, JSON.stringify(progres)); } catch {}
}

function getProgresSoal(id) {
  const p = getProgres();
  return p[id] || { ...PROGRES_DEFAULT };
}

function updateProgresSoal(id, data) {
  const p = getProgres();
  p[id] = { ...PROGRES_DEFAULT, ...p[id], ...data, timestamp: new Date().toISOString() };
  simpanProgres(p);
}

function getPengaturan() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PENGATURAN)) || {};
  } catch {
    return {};
  }
}

function simpanPengaturan(settings) {
  try { localStorage.setItem(STORAGE_PENGATURAN, JSON.stringify(settings)); } catch {}
}

function getPengaturanDefault() {
  return {
    darkMode: false,
    urutan: "berurutan",
    filter: "semua",
    otomatisLanjut: false
  };
}

function getRiwayatSesi() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_SESI)) || [];
  } catch {
    return [];
  }
}

function simpanSesi(sesi) {
  try { localStorage.setItem(STORAGE_SESI, JSON.stringify(sesi)); } catch {}
}

function resetSemuaData() {
  localStorage.removeItem(STORAGE_PROGRES);
  localStorage.removeItem(STORAGE_PENGATURAN);
  localStorage.removeItem(STORAGE_SESI);
}

function getStatistik() {
  const progres = getProgres();
  const total = questions.length;
  let benar = 0, salah = 0, lewat = 0, flag = 0, belum = 0;
  let totalWaktu = 0;

  questions.forEach(q => {
    const p = progres[q.id];
    if (!p || !p.status) { belum++; return; }
    switch (p.status) {
      case "benar": benar++; break;
      case "salah": salah++; break;
      case "lewat": lewat++; break;
      case "flag": flag++; break;
    }
    if (p.waktu) totalWaktu += p.waktu;
  });

  const dikerjakan = benar + salah;
  const akurasi = dikerjakan > 0 ? Math.round((benar / dikerjakan) * 100) : 0;

  const riwayat = getRiwayatSesi();
  let streakSaatIni = 0, streakTerpanjang = 0;
  if (riwayat.length > 0) {
    const streaks = riwayat.map(s => s.streak || 0);
    streakTerpanjang = Math.max(...streaks);
    streakSaatIni = streaks[streaks.length - 1];
  }

  const soalPerBagian = {};
  questions.forEach(q => {
    if (!soalPerBagian[q.part]) soalPerBagian[q.part] = { partName: q.partName, total: 0, benar: 0, salah: 0 };
    soalPerBagian[q.part].total++;
    const p = progres[q.id];
    if (p?.status === "benar") soalPerBagian[q.part].benar++;
    if (p?.status === "salah") soalPerBagian[q.part].salah++;
  });

  return { total, benar, salah, lewat, flag, belum, dikerjakan, akurasi, totalWaktu, streakSaatIni, streakTerpanjang, soalPerBagian };
}

// Hitung delta stats untuk sesi terakhir — selisih total global sebelum & sesudah sesi
function hitungDeltaSesi(sebelum, sesudah) {
  return {
    benar: sesudah.benar - sebelum.benar,
    salah: sesudah.salah - sebelum.salah,
    lewat: sesudah.lewat - sebelum.lewat,
    flag: sesudah.flag - sebelum.flag,
  };
}
