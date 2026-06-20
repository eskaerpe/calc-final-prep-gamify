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
  localStorage.setItem(STORAGE_PROGRES, JSON.stringify(progres));
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
  localStorage.setItem(STORAGE_PENGATURAN, JSON.stringify(settings));
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
  localStorage.setItem(STORAGE_SESI, JSON.stringify(sesi));
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
    streakTerpanjang = Math.max(...riwayat.map(s => s.streak || 0));
    streakSaatIni = riwayat[riwayat.length - 1].streak || 0;
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
