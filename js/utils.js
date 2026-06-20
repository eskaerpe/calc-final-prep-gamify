function formatWaktu(detik) {
  const j = Math.floor(detik / 3600);
  const m = Math.floor((detik % 3600) / 60);
  const d = Math.floor(detik % 60);
  return `${String(j).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}

function formatTgl(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

function formatTglSingkat(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

function acakArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PROGRES_DEFAULT = { status: "", jawaban: "", waktu: 0, timestamp: null };

function statusWarna(status) {
  switch (status) {
    case "benar": return "#7ca67c";
    case "salah": return "#c47a7a";
    case "lewat": return "#8a8a8a";
    case "flag": return "#c4a67a";
    default: return "#d0d0c8";
  }
}

function statusLabel(status) {
  switch (status) {
    case "benar": return "Benar";
    case "salah": return "Salah";
    case "lewat": return "Dilewati";
    case "flag": return "Di-flag";
    default: return "Belum";
  }
}

// Chart.js shared renderers
function buatDonut(ctx, data, label) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Benar", "Salah", "Dilewati", "Di-flag", "Belum"],
      datasets: [{
        data: [data.benar, data.salah, data.lewat, data.flag, data.belum],
        backgroundColor: ["#7ca67c", "#c47a7a", "#8a8a8a", "#c4a67a", "#d0d0c8"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      cutout: "72%",
      plugins: {
        legend: { position: "bottom", labels: { padding: 14, usePointStyle: true, pointStyleWidth: 8, font: { size: 12 } } }
      }
    }
  });
}

function buatBarBagian(ctx, stats) {
  const labels = Object.values(stats.soalPerBagian).map(s => {
    const nama = s.partName;
    if (nama.includes("Deret dan")) return "Deret";
    if (nama.includes("Taylor")) return "Taylor";
    return nama;
  });
  const benarData = Object.values(stats.soalPerBagian).map(s => s.benar);
  const salahData = Object.values(stats.soalPerBagian).map(s => s.salah);
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "Benar", data: benarData, backgroundColor: "#7ca67c", borderRadius: 4 },
        { label: "Salah", data: salahData, backgroundColor: "#c47a7a", borderRadius: 4 }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: { stacked: true, grid: { display: false } },
        y: { stacked: true, beginAtZero: true, grid: { color: "#e5e5e0" }, ticks: { stepSize: 1 } }
      },
      plugins: { legend: { position: "bottom", labels: { usePointStyle: true, pointStyleWidth: 8, font: { size: 12 } } } }
    }
  });
}

function initDarkMode() {
  const p = { ...getPengaturanDefault(), ...getPengaturan() };
  if (p.darkMode) document.documentElement.classList.add("dark");
  const btn = document.getElementById("darkToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      simpanPengaturan({ ...getPengaturan(), ...getPengaturanDefault(), darkMode: isDark });
    });
  }
}
