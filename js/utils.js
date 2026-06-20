function formatWaktu(detik) {
  const j = Math.floor(detik / 3600);
  const m = Math.floor((detik % 3600) / 60);
  const d = detik % 60;
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

const PROGRESS_DEFAULT = { status: "", jawaban: "", waktu: 0, timestamp: null };

function statusWarna(status) {
  switch (status) {
    case "benar": return "#22c55e";
    case "salah": return "#ef4444";
    case "lewat": return "#6b7280";
    case "flag": return "#f59e0b";
    default: return "#d1d5db";
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
