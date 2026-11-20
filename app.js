const TEAMS = [
  { id: "ars", name: "Arsenal", short: "ARS", colors: ["#ef0107", "#ffffff", "#063672"], mark: "split", rarity: "legende", kind: "club", league: "Premier League", place: "1er", popular: true },
  { id: "mci", name: "Manchester City", short: "MCI", colors: ["#6cabdd", "#1c2c5b"], mark: "split", rarity: "epique", kind: "club", league: "Premier League", place: "2e", popular: true },
  { id: "mun", name: "Manchester United", short: "MUN", colors: ["#da291c", "#fbe122"], mark: "split", rarity: "epique", kind: "club", league: "Premier League", place: "3e", popular: true },
  { id: "avl", name: "Aston Villa", short: "AVL", colors: ["#670e36", "#95bfe5"], mark: "split", rarity: "rare", kind: "club", league: "Premier League", place: "4e", popular: true },
  { id: "bar", name: "Barcelone", short: "FCB", colors: ["#a50044", "#004d98", "#edbb00"], mark: "stripes", rarity: "legende", kind: "club", league: "Liga", place: "1er", popular: true },
  { id: "rma", name: "Real Madrid", short: "RMA", colors: ["#ffffff", "#febe10"], mark: "split", rarity: "epique", kind: "club", league: "Liga", place: "2e", popular: true },
  { id: "vil", name: "Villarreal", short: "VIL", colors: ["#ffe667", "#005ca9"], mark: "split", rarity: "rare", kind: "club", league: "Liga", place: "3e", popular: true },
  { id: "atm", name: "Atlético", short: "ATM", colors: ["#cb3524", "#ffffff", "#272e61"], mark: "stripes", rarity: "rare", kind: "club", league: "Liga", place: "4e", popular: true },
  { id: "int", name: "Inter", short: "INT", colors: ["#010e80", "#000000"], mark: "stripes", rarity: "legende", kind: "club", league: "Serie A", place: "1er", popular: true },
  { id: "nap", name: "Naples", short: "NAP", colors: ["#12a0d7", "#003c82"], mark: "split", rarity: "epique", kind: "club", league: "Serie A", place: "2e", popular: true },
  { id: "rom", name: "Rome", short: "ROM", colors: ["#8e1f2f", "#f0bc42"], mark: "split", rarity: "rare", kind: "club", league: "Serie A", place: "3e", popular: true },
  { id: "com", name: "Côme", short: "COM", colors: ["#0c2340", "#ffffff"], mark: "split", rarity: "rare", kind: "club", league: "Serie A", place: "4e", popular: true },
  { id: "bay", name: "Bayern", short: "BAY", colors: ["#dc052d", "#ffffff", "#0066b2"], mark: "split", rarity: "legende", kind: "club", league: "Bundesliga", place: "1er", popular: true },
  { id: "bvb", name: "Dortmund", short: "BVB", colors: ["#fde100", "#000000"], mark: "split", rarity: "epique", kind: "club", league: "Bundesliga", place: "2e", popular: true },
  { id: "rbl", name: "Leipzig", short: "RBL", colors: ["#dd0741", "#ffffff"], mark: "split", rarity: "rare", kind: "club", league: "Bundesliga", place: "3e", popular: true },
  { id: "vfb", name: "Stuttgart", short: "VFB", colors: ["#ffffff", "#e32219"], mark: "band", rarity: "rare", kind: "club", league: "Bundesliga", place: "4e", popular: true },
  { id: "psg", name: "PSG", short: "PSG", colors: ["#004170", "#da291c"], mark: "split", rarity: "legende", kind: "club", league: "Ligue 1", place: "1er", popular: true },
  { id: "rcl", name: "Lens", short: "RCL", colors: ["#ffd100", "#ed1c24"], mark: "split", rarity: "epique", kind: "club", league: "Ligue 1", place: "2e", popular: true },
  { id: "lil", name: "Lille", short: "LIL", colors: ["#c8102e", "#ffffff"], mark: "split", rarity: "rare", kind: "club", league: "Ligue 1", place: "3e", popular: true },
  { id: "ol", name: "Lyon", short: "OL", colors: ["#ffffff", "#003da5", "#e10000"], mark: "band", rarity: "rare", kind: "club", league: "Ligue 1", place: "4e", popular: true },
  { id: "fra", name: "France", short: "FRA", colors: ["#002395", "#ffffff", "#ed2939"], mark: "band", rarity: "legende", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "esp", name: "Espagne", short: "ESP", colors: ["#aa151b", "#f1bf00"], mark: "band", rarity: "legende", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "arg", name: "Argentine", short: "ARG", colors: ["#74acdf", "#ffffff"], mark: "stripes", rarity: "legende", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "eng", name: "Angleterre", short: "ENG", colors: ["#ffffff", "#cf081f"], mark: "band", rarity: "legende", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "mar", name: "Maroc", short: "MAR", colors: ["#c1272d", "#006233"], mark: "band", rarity: "epique", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "bel", name: "Belgique", short: "BEL", colors: ["#000000", "#fdda24", "#ef3340"], mark: "band", rarity: "epique", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "sui", name: "Suisse", short: "SUI", colors: ["#ff0000", "#ffffff"], mark: "split", rarity: "rare", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true },
  { id: "nor", name: "Norvège", short: "NOR", colors: ["#ba0c2f", "#ffffff", "#00205b"], mark: "band", rarity: "rare", kind: "nation", league: "Coupe du monde", place: "1/4", popular: true }
];
const LEGACY_TEAMS = [
  { id: "liv", name: "Liverpool", short: "LIV", colors: ["#c8102e", "#00a398"] },
  { id: "che", name: "Chelsea", short: "CHE", colors: ["#034694", "#dba111"] },
  { id: "juv", name: "Juventus", short: "JUV", colors: ["#111111", "#ffffff"] },
  { id: "mil", name: "Milan", short: "MIL", colors: ["#fb090b", "#111111"] },
  { id: "om", name: "Marseille", short: "OM", colors: ["#2faee0", "#f4f4f4"] },
  { id: "ajx", name: "Ajax", short: "AJX", colors: ["#d2122e", "#f4f4f4"] },
  { id: "ben", name: "Benfica", short: "BEN", colors: ["#e53027", "#f4f4f4"] },
  { id: "fcp", name: "Porto", short: "FCP", colors: ["#003893", "#f4f4f4"] },
  { id: "tot", name: "Tottenham", short: "TOT", colors: ["#132257", "#f4f4f4"] },
  { id: "b04", name: "Leverkusen", short: "B04", colors: ["#e32221", "#111111"] },
  { id: "asm", name: "Monaco", short: "ASM", colors: ["#e30613", "#f4f4f4"] },
  { id: "ren", name: "Rennes", short: "REN", colors: ["#e30613", "#111111"] },
  { id: "nic", name: "Nice", short: "NIC", colors: ["#111111", "#e30613"] },
  { id: "new", name: "Newcastle", short: "NEW", colors: ["#241f20", "#f4f4f4"] },
  { id: "ata", name: "Atalanta", short: "ATA", colors: ["#1e71b8", "#111111"] },
  { id: "sev", name: "Séville", short: "SEV", colors: ["#f43333", "#f4f4f4"] },
  { id: "gal", name: "Galatasaray", short: "GAL", colors: ["#a90432", "#fdb912"] },
  { id: "cel", name: "Celtic", short: "CEL", colors: ["#018749", "#f4f4f4"] },
  { id: "mia", name: "Inter Miami", short: "MIA", colors: ["#f7b5cd", "#231f20"] },
  { id: "nas", name: "Al Nassr", short: "NAS", colors: ["#ffd200", "#1a3e8a"] },
  { id: "fla", name: "Flamengo", short: "FLA", colors: ["#c5261b", "#111111"] },
  { id: "boc", name: "Boca", short: "BOC", colors: ["#0033a0", "#ffd200"] },
  { id: "fen", name: "Fenerbahçe", short: "FEN", colors: ["#ffed00", "#00205b"] },
  { id: "bra", name: "Brésil", short: "BRA", colors: ["#ffdf00", "#009c3b"] },
  { id: "ger", name: "Allemagne", short: "GER", colors: ["#111111", "#dd0000"] },
  { id: "por", name: "Portugal", short: "POR", colors: ["#006600", "#ff0000"] },
  { id: "ita", name: "Italie", short: "ITA", colors: ["#0066cc", "#f4f4f4"] },
  { id: "ned", name: "Pays-Bas", short: "NED", colors: ["#ff6600", "#f4f4f4"] },
  { id: "cro", name: "Croatie", short: "CRO", colors: ["#ef3340", "#0033a0"] },
  { id: "sen", name: "Sénégal", short: "SEN", colors: ["#00853f", "#fdef42"] },
  { id: "jpn", name: "Japon", short: "JPN", colors: ["#bc002d", "#f4f4f4"] }
];

const RARITY_LABEL = { commun: "Commun", rare: "Rare", epique: "Épique", legende: "Légende" };
const FORMAT_SIZE = { solo: 1, duo: 2, trio: 3 };
const PALETTE = ["#e85d75", "#e7c576", "#d6ff4a", "#7eb6ff", "#d2a4ff", "#ff9f68", "#5ee0c5", "#f2f2f2", "#ff7ab8", "#9dffb0"];
const CHALLENGES = [
  { id: "gap", label: "Gagner par 2 buts ou plus", test: (gf, ga) => gf >= ga + 2 },
  { id: "clean", label: "Gagner sans encaisser", test: (gf, ga) => ga === 0 && gf > ga },
  { id: "three", label: "Marquer au moins 3 buts", test: (gf) => gf >= 3 },
  { id: "one", label: "Gagner 1-0", test: (gf, ga) => gf === 1 && ga === 0 },
  { id: "win", label: "Gagner le match", test: (gf, ga) => gf > ga }
];
const CLOTHES = [
  { id: "pull", label: "Pull", full: "Pull", heat: 2 },
  { id: "shirt", label: "T-shirt", full: "T-shirt", heat: 3 },
  { id: "pants", label: "Pantalon", full: "Pantalon", heat: 3 },
  { id: "boxer", label: "Caleçon", full: "Caleçon", heat: 3 },
  { id: "socks", label: "Chaussettes", full: "Paire de chaussettes", heat: 1 }
];
const CLOTH_ALIAS = { jacket: "pull", "sock-l": "socks", "sock-r": "socks" };
function clothById(id) { return CLOTHES.find((item) => item.id === id) || null; }
function keepCloth(item, seen) {
  const id = CLOTH_ALIAS[item?.id] || item?.id;
  const cloth = clothById(id);
  if (!cloth || seen.has(id)) return [];
  seen.add(id);
  return [{ id, label: cloth.label }];
}
const STORE_KEY = "strip-fifa-v1";

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const uid = () => Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);
const mod = (a, n) => ((a % n) + n) % n;
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[ch]));

function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}
function inkFor(colors) {
  return colors.every((hex) => luminance(hex) > 0.62) ? "#161616" : "#ffffff";
}
function teamById(id) { return TEAMS.find((team) => team.id === id) || LEGACY_TEAMS.find((team) => team.id === id) || null; }
function challengeById(id) { return CHALLENGES.find((item) => item.id === id) || null; }

let state = null;
let busy = false;
let toastTimer = 0;
let confirmResolve = null;
let stakeToken = 0;
let scanMatchId = null;
let ocrLoading = null;
const mainWheel = new Wheel();

function fresh() {
  return {
    v: 1,
    night: "Strip FIFA",
    players: [],
    format: "duo",
    teamFilter: "all",
    selectedTeams: TEAMS.filter((team) => team.popular).map((team) => team.id),
    squads: [],
    matches: [],
    spotlight: null,
    view: "setup",
    mute: false,
    express: false,
    tv: false,
    catalog: 2,
  };
}

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (!raw || raw.v !== 1) return fresh();
    return { ...fresh(), ...raw, players: raw.players || [], squads: raw.squads || [], matches: raw.matches || [] };
  } catch {
    return fresh();
  }
}

function sanitize() {
  state.players.forEach((person) => {
    if (!/^#[0-9a-fA-F]{6}$/.test(person.color || "")) person.color = PALETTE[0];
  });
  const teamIds = new Set(TEAMS.map((team) => team.id));
  if (state.catalog !== 2) {
    state.selectedTeams = TEAMS.map((team) => team.id);
    state.catalog = 2;
  }
  state.selectedTeams = (state.selectedTeams || []).filter((id) => teamIds.has(id));
  if (!state.selectedTeams.length) state.selectedTeams = fresh().selectedTeams;
  const playerIds = new Set((state.players || []).map((player) => player.id));
  const squadsOk = state.squads.every((squad) => (squad.playerIds || []).every((id) => playerIds.has(id)));
  if (!squadsOk) {
    state.squads = [];
    state.matches = [];
  }
  const squadIds = new Set(state.squads.map((squad) => squad.id));
  const matchesOk = state.matches.every((match) => squadIds.has(match.home) && (!match.away || squadIds.has(match.away)));
  if (!matchesOk) state.matches = [];
  state.matches.forEach((match) => {
    if (!Array.isArray(match.stakes)) match.stakes = match.stake ? [match.stake] : [];
    const seenStake = new Set();
    match.stakes = match.stakes.flatMap((item) => keepCloth(item, seenStake));
    match.stake = null;
    if (!Array.isArray(match.restores)) match.restores = [];
    const seenRestore = new Set();
    match.restores = match.restores.flatMap((item) => keepCloth(item, seenRestore));
    if (match.choice !== "strip" && match.choice !== "restore") match.choice = null;
    const homeSquad = state.squads.find((squadItem) => squadItem.id === match.home);
    const awaySquad = state.squads.find((squadItem) => squadItem.id === match.away);
    if (!teamById(match.homeClub)) match.homeClub = match.played && homeSquad ? homeSquad.teamId : null;
    if (!teamById(match.homeClub)) match.homeClub = null;
    if (!teamById(match.awayClub)) match.awayClub = match.played && awaySquad ? awaySquad.teamId : null;
    if (!teamById(match.awayClub)) match.awayClub = null;
  });
  if (!["solo", "duo", "trio"].includes(state.format)) state.format = "duo";
  if (!["setup", "draw", "matches", "rank"].includes(state.view)) state.view = "setup";
  if (!["all", "club", "nation"].includes(state.teamFilter)) state.teamFilter = "all";
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

const Sfx = {
  ctx: null,
  enabled: true,
  arm() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!this.ctx) this.ctx = new Ctx();
    if (this.ctx.state === "suspended") this.ctx.resume();
  },
  beep(freq, when, dur, type, gain) {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    amp.gain.setValueAtTime(gain, when);
    amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(amp);
    amp.connect(this.ctx.destination);
    osc.start(when);
    osc.stop(when + dur + 0.02);
  },
  tick() {
    this.arm();
    if (!this.ctx) return;
    this.beep(660, this.ctx.currentTime, 0.03, "sine", 0.025);
  },
  pack() {
    this.arm();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.beep(180, now, 0.12, "sawtooth", 0.03);
    this.beep(90, now + 0.05, 0.18, "sine", 0.04);
  },
  reveal(rarity) {
    this.arm();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = rarity === "legende" ? [523, 659, 784, 1046] : rarity === "epique" ? [440, 554, 659] : [392, 523];
    notes.forEach((note, index) => this.beep(note, now + index * 0.08, 0.18, "triangle", 0.05));
  },
  fanfare() {
    this.arm();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523, 659, 784, 1046, 784, 1046].forEach((note, index) => this.beep(note, now + index * 0.11, 0.2, "triangle", 0.06));
  }
};

const confetti = {
  parts: [],
  frame: 0,
  burst(count = 90) {
    const canvas = $("confetti");
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = ["#e7c576", "#d6ff4a", "#ff5d8f", "#f4f0e6", "#7eb6ff"];
    for (let i = 0; i < count; i += 1) {
      this.parts.push({
        x: innerWidth * 0.5 + (Math.random() - 0.5) * 180,
        y: innerHeight * 0.28,
        vx: (Math.random() - 0.5) * 11,
        vy: Math.random() * -12 - 4,
        g: 0.18 + Math.random() * 0.12,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        color: colors[i % colors.length],
        rot: Math.random() * 6,
        vr: (Math.random() - 0.5) * 0.3
      });
    }
    if (!this.frame) this.loop();
  },
  loop() {
    const canvas = $("confetti");
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    this.parts.forEach((part) => {
      part.vy += part.g;
      part.x += part.vx;
      part.y += part.vy;
      part.rot += part.vr;
      ctx.save();
      ctx.translate(part.x, part.y);
      ctx.rotate(part.rot);
      ctx.fillStyle = part.color;
      ctx.fillRect(-part.w / 2, -part.h / 2, part.w, part.h);
      ctx.restore();
    });
    this.parts = this.parts.filter((part) => part.y < innerHeight + 40);
    if (this.parts.length) this.frame = requestAnimationFrame(() => this.loop());
    else this.frame = 0;
  }
};

function Wheel() {}
Wheel.prototype.mount = function mount(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.rot = this.rot || 0;
  this.items = this.items || [];
  this.size = this.size || 0;
};
Wheel.prototype.fit = function fit() {
  if (!this.canvas) return;
  const wrap = this.canvas.parentElement;
  const size = Math.floor(wrap.clientWidth);
  if (size > 40) this.setSize(size);
};
Wheel.prototype.setSize = function setSize(px) {
  if (!this.canvas || !px) return;
  this.size = px;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  this.canvas.width = Math.floor(px * dpr);
  this.canvas.height = Math.floor(px * dpr);
  this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  this.draw();
};
Wheel.prototype.setItems = function setItems(items) {
  this.items = items;
  this.draw();
};
Wheel.prototype.indexAtPointer = function indexAtPointer() {
  const count = this.items.length;
  if (!count) return -1;
  const seg = (Math.PI * 2) / count;
  return Math.min(count - 1, Math.floor(mod(-this.rot, Math.PI * 2) / seg));
};
Wheel.prototype.draw = function draw() {
  if (!this.ctx || !this.size) return;
  const ctx = this.ctx;
  const size = this.size;
  const cx = size / 2;
  const cy = size / 2;
  const rim = size / 2 - 8;
  const colorR = rim - 14;
  ctx.clearRect(0, 0, size, size);
  const items = this.items;
  if (!items.length) {
    ctx.beginPath();
    ctx.arc(cx, cy, colorR, 0, Math.PI * 2);
    ctx.fillStyle = "#142018";
    ctx.fill();
    ctx.fillStyle = "#e7c576";
    ctx.font = "600 16px Outfit, Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("En attente", cx, cy);
    return;
  }
  const seg = (Math.PI * 2) / items.length;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(this.rot);
  items.forEach((item, index) => {
    const start = -Math.PI / 2 + index * seg;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, colorR, start, start + seg);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.35)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.save();
    const mid = start + seg / 2;
    ctx.rotate(mid);
    const abs = mod(this.rot + mid, Math.PI * 2);
    const flip = abs > Math.PI / 2 && abs < (Math.PI * 3) / 2;
    ctx.fillStyle = item.ink;
    const font = items.length > 10 ? 12 : items.length > 6 ? 15 : 18;
    ctx.font = `700 ${font}px Outfit, Segoe UI, sans-serif`;
    ctx.textBaseline = "middle";
    let label = item.label;
    const edge = colorR - 14;
    const maxWidth = edge - 46;
    while (label.length > 1 && ctx.measureText(label).width > maxWidth) label = `${label.slice(0, -2)}…`;
    if (flip) {
      ctx.rotate(Math.PI);
      ctx.textAlign = "left";
      ctx.fillText(label, -edge, 0);
    } else {
      ctx.textAlign = "right";
      ctx.fillText(label, edge, 0);
    }
    ctx.restore();
  });
  ctx.restore();
  ctx.beginPath();
  ctx.arc(cx, cy, rim, 0, Math.PI * 2);
  ctx.lineWidth = 10;
  const rimGrad = ctx.createLinearGradient(0, 0, size, size);
  rimGrad.addColorStop(0, "#fff0c2");
  rimGrad.addColorStop(0.45, "#f0c86a");
  rimGrad.addColorStop(1, "#9c7330");
  ctx.strokeStyle = rimGrad;
  ctx.stroke();
  const lights = Math.max(items.length, 12);
  for (let i = 0; i < lights; i += 1) {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / lights;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * (rim - 1), cy + Math.sin(angle) * (rim - 1), 3.1, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 ? "#e7c576" : "#3a3424";
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(cx, cy, 36, 0, Math.PI * 2);
  ctx.fillStyle = "#101810";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#e7c576";
  ctx.stroke();
  ctx.fillStyle = "#e7c576";
  ctx.font = "700 16px Outfit, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SF", cx, cy);
};
Wheel.prototype.spinTo = function spinTo(index, opts = {}) {
  if (this.frame) cancelAnimationFrame(this.frame);
  const count = this.items.length;
  if (!count) return Promise.resolve(-1);
  const seg = (Math.PI * 2) / count;
  const target = mod(-(index + 0.5) * seg, Math.PI * 2);
  const current = mod(this.rot, Math.PI * 2);
  const delta = mod(target - current, Math.PI * 2);
  const from = this.rot;
  const to = this.rot + Math.PI * 2 * (opts.turns ?? 6) + delta;
  const duration = opts.duration ?? 4200;
  const t0 = performance.now();
  let last = -1;
  return new Promise((resolve) => {
    const step = (now) => {
      if (opts.abort && opts.abort()) {
        this.frame = 0;
        resolve(-1);
        return;
      }
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - t) ** 4;
      this.rot = from + (to - from) * eased;
      this.draw();
      const at = this.indexAtPointer();
      if (at !== last) {
        last = at;
        if (opts.onTick) opts.onTick(at);
      }
      if (t < 1) this.frame = requestAnimationFrame(step);
      else {
        this.rot = target;
        this.draw();
        this.frame = 0;
        resolve(index);
      }
    };
    this.frame = requestAnimationFrame(step);
  });
};

function player(id) { return state.players.find((item) => item.id === id) || null; }
function squad(id) { return state.squads.find((item) => item.id === id) || null; }
function matchById(id) { return state.matches.find((item) => item.id === id) || null; }
function locked() { return state.squads.length > 0; }
function realMatches() { return state.matches.filter((match) => match.away); }
function tournamentOver() {
  const matches = realMatches();
  return matches.length > 0 && matches.every((match) => match.played);
}
function nextSlot() {
  return state.squads.find((item) => item.playerIds.length < item.cap) || null;
}
function takenPlayerIds() {
  return new Set(state.squads.flatMap((item) => item.playerIds));
}
function remainingPlayers() {
  const taken = takenPlayerIds();
  return state.players.filter((item) => !taken.has(item.id));
}
function teamName(item) {
  if (!item) return "Équipe";
  const names = memberNames(item);
  if (names) return names;
  const index = state.squads.indexOf(item);
  return `Équipe ${index + 1}`;
}
function sideClub(match, side) {
  return teamById(side === "h" ? match?.homeClub : match?.awayClub);
}
function clubsReady(match) {
  return !!(match && sideClub(match, "h") && sideClub(match, "a"));
}
function versusLabel(match) {
  const home = squad(match.home);
  const away = squad(match.away);
  const leftClub = sideClub(match, "h");
  const rightClub = sideClub(match, "a");
  const left = leftClub ? `${teamName(home)} · ${leftClub.name}` : teamName(home);
  const right = rightClub ? `${teamName(away)} · ${rightClub.name}` : teamName(away);
  return `${left} vs ${right}`;
}
function memberNames(item) {
  return item.playerIds.map((id) => player(id)?.name || "?").join(" · ");
}
function plan(count, size) {
  if (count < 2) return null;
  const full = Math.floor(count / size);
  const rem = count % size;
  const caps = Array.from({ length: full }, () => size);
  if (rem) caps.push(rem);
  return caps.length >= 2 ? caps : null;
}
function describe(caps) {
  const counts = new Map();
  caps.forEach((cap) => counts.set(cap, (counts.get(cap) || 0) + 1));
  return [...counts.entries()].map(([cap, count]) => {
    if (cap === 1) return count > 1 ? `${count} solos` : "1 solo";
    if (cap === 2) return count > 1 ? `${count} duos` : "1 duo";
    if (cap === 3) return count > 1 ? `${count} trios` : "1 trio";
    return `${count} équipe${count > 1 ? "s" : ""} de ${cap}`;
  }).join(" + ");
}
function phase() {
  if (!state.squads.length) return "idle";
  if (state.squads.some((item) => item.playerIds.length < item.cap)) return "draft";
  return state.matches.length ? "live" : "ready";
}
function wheelTiming(manual) {
  if (state.express) return { duration: 900, turns: 2 };
  if (!manual) return { duration: 2300, turns: 4 };
  return { duration: 4200, turns: 6 };
}
function toWheelItems(players) {
  return players.map((item) => ({
    label: item.name,
    color: item.color,
    ink: luminance(item.color) > 0.68 ? "#172117" : "#f7f4ec"
  }));
}
function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function pickChallenge() {
  const bag = ["gap", "gap", "clean", "clean", "three", "one", "win"];
  return bag[Math.floor(Math.random() * bag.length)];
}
function pickTeamFor(item, excludeCurrent) {
  const used = new Set(state.squads.filter((squadItem) => squadItem.id !== item.id && squadItem.teamId).map((squadItem) => squadItem.teamId));
  let pool = state.selectedTeams.filter((id) => !used.has(id));
  if (excludeCurrent && item.teamId) pool = pool.filter((id) => id !== item.teamId);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}
function roundRobin(ids) {
  const list = ids.slice();
  if (list.length % 2) list.push(null);
  const count = list.length;
  const rounds = [];
  for (let round = 0; round < count - 1; round += 1) {
    const pairs = [];
    for (let i = 0; i < count / 2; i += 1) pairs.push([list[i], list[count - 1 - i]]);
    rounds.push(pairs);
    const fixed = list[0];
    const rest = list.slice(1);
    rest.unshift(rest.pop());
    list.splice(0, list.length, fixed, ...rest);
  }
  return rounds;
}
function challengeHit(item, match) {
  if (!match.played || !match.away) return false;
  const challenge = challengeById(item.challengeId);
  if (!challenge) return false;
  const home = match.home === item.id;
  if (!home && match.away !== item.id) return false;
  const gf = home ? match.hs : match.as;
  const ga = home ? match.as : match.hs;
  return challenge.test(gf, ga);
}
function standings() {
  return state.squads.map((item) => {
    const row = { squad: item, played: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, bonus: 0 };
    state.matches.forEach((match) => {
      if (!match.played || !match.away) return;
      let gf = null;
      let ga = null;
      if (match.home === item.id) { gf = match.hs; ga = match.as; }
      else if (match.away === item.id) { gf = match.as; ga = match.hs; }
      else return;
      row.played += 1;
      row.gf += gf;
      row.ga += ga;
      if (gf > ga) row.w += 1;
      else if (gf === ga) row.d += 1;
      else row.l += 1;
      if (challengeHit(item, match)) row.bonus += 1;
    });
    row.gd = row.gf - row.ga;
    row.pts = row.w * 3 + row.d + row.bonus;
    return row;
  }).sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || teamName(a.squad).localeCompare(teamName(b.squad), "fr"));
}
function loserOf(match) {
  if (!match.played || !match.away || match.hs === match.as) return null;
  return squad(match.hs > match.as ? match.away : match.home);
}
function winnerOf(match) {
  if (!match.played || !match.away || match.hs === match.as) return null;
  return squad(match.hs > match.as ? match.home : match.away);
}
function goalGap(match) {
  return Math.abs((match.hs || 0) - (match.as || 0));
}
function blowout(match) {
  return goalGap(match) > 3;
}
function matchRestores(match) {
  return Array.isArray(match?.restores) ? match.restores : [];
}
function clearGage(match) {
  match.stakes = [];
  match.restores = [];
  match.choice = null;
}
function awaitsChoice(match) {
  return !!(match.played && blowout(match) && loserOf(match) && !match.choice && !matchStakes(match).length);
}
function matchStakes(match) {
  if (Array.isArray(match?.stakes)) return match.stakes;
  return match?.stake ? [match.stake] : [];
}
function penaltyPlan(match) {
  const gd = goalGap(match);
  if (!gd || match.choice === "restore") return { n: 0, reasons: [], gd };
  return { n: 1, reasons: ["Défaite"], gd };
}
function neededSpins(match) {
  if (!goalGap(match) || match.choice === "restore") return 0;
  if (blowout(match) && !match.choice && !matchStakes(match).length) return 0;
  return 1;
}
function remainingSpins(match) {
  return Math.max(0, neededSpins(match) - matchStakes(match).length);
}
function removedMap() {
  const map = {};
  state.players.forEach((person) => { map[person.id] = []; });
  state.matches
    .filter((match) => (matchStakes(match).length && loserOf(match)) || matchRestores(match).length)
    .sort((a, b) => a.playedAt - b.playedAt)
    .forEach((match) => {
      const loser = loserOf(match);
      if (loser) {
        matchStakes(match).forEach((stake) => {
          loser.playerIds.forEach((pid) => {
            if (map[pid] && !map[pid].includes(stake.id)) map[pid].push(stake.id);
          });
        });
      }
      const winner = winnerOf(match);
      if (winner) {
        matchRestores(match).forEach((item) => {
          winner.playerIds.forEach((pid) => {
            if (!map[pid]) return;
            const at = map[pid].indexOf(item.id);
            if (at >= 0) map[pid].splice(at, 1);
          });
        });
      }
    });
  return map;
}
function previousSquadMatch(item, before) {
  if (!item) return null;
  return state.matches
    .filter((match) => match.played && match.away && match.playedAt < before && (match.home === item.id || match.away === item.id))
    .sort((a, b) => b.playedAt - a.playedAt)[0] || null;
}
function returnableClothes(winner, before) {
  const prev = previousSquadMatch(winner, before);
  if (!prev || loserOf(prev)?.id !== winner.id) return [];
  const removed = removedMap();
  const ids = [];
  matchStakes(prev).forEach((stake) => {
    if (!clothById(stake.id) || ids.includes(stake.id)) return;
    if (winner.playerIds.some((pid) => (removed[pid] || []).includes(stake.id))) ids.push(stake.id);
  });
  return ids.map((id) => clothById(id));
}
function clothesLeftFor(match) {
  const loser = loserOf(match);
  if (!loser) return [];
  const removed = removedMap();
  return CLOTHES.filter((item) => loser.playerIds.some((pid) => !(removed[pid] || []).includes(item.id)));
}
function teamRemovedCount(item, removed) {
  return item.playerIds.reduce((sum, pid) => sum + (removed[pid] || []).length, 0);
}
function currentMatch() {
  const matches = realMatches();
  if (state.spotlight) {
    const chosen = matches.find((match) => match.id === state.spotlight && !match.played);
    if (chosen) return chosen;
  }
  return matches.find((match) => !match.played) || null;
}
function logoFile(team) {
  if (!team) return "";
  const flags = new Set(["fra", "esp", "arg", "eng", "mar", "bel", "sui", "nor", "bra", "ger", "por", "ita", "ned", "cro", "sen", "jpn"]);
  const clubs = new Set(["ars", "mci", "mun", "avl", "liv", "che", "tot", "new", "bar", "rma", "vil", "atm", "sev", "int", "nap", "rom", "com", "juv", "mil", "ata", "bay", "bvb", "rbl", "vfb", "b04", "psg", "rcl", "lil", "ol", "om", "asm", "ren", "nic", "ajx", "ben", "fcp", "gal", "fen", "cel"]);
  if (flags.has(team.id)) return `logos/${team.id}.svg`;
  if (clubs.has(team.id)) return `logos/${team.id}.png`;
  return "";
}
function shieldHTML(team, large) {
  const logo = logoFile(team);
  if (logo) {
    const size = large ? "width:92px;height:108px" : "";
    return `<div class="shield logo" style="${size}"><img src="${logo}" alt="${esc(team.name)}"></div>`;
  }
  const ink = luminance(team.colors[0]) > 0.72 ? "#161616" : "#ffffff";
  const c = team.colors[2] || team.colors[0];
  const mark = team.mark || "split";
  return `<div class="shield mark-${mark}" style="--a:${team.colors[0]};--b:${team.colors[1]};--c:${c};--inkc:${ink}${large ? ";width:92px;height:108px;font-size:34px" : ""}"><span>${esc(team.short)}</span></div>`;
}
function rarityColor(rarity) {
  return { commun: "#b9b3a7", rare: "#7eb6ff", epique: "#d2a4ff", legende: "#e7c576" }[rarity] || "#e7c576";
}

function paintChrome() {
  document.body.classList.toggle("tv", !!state.tv);
  $("eyebrow").textContent = "Tournoi de salon";
  $("sound-btn").classList.toggle("on", !state.mute);
  $("sound-btn").setAttribute("aria-pressed", String(!state.mute));
  $("sound-btn").textContent = state.mute ? "Muet" : "Son";
  $("express-btn").classList.toggle("on", !!state.express);
  $("express-btn").setAttribute("aria-pressed", String(!!state.express));
  $("tv-btn").classList.toggle("on", !!state.tv);
  $("tv-btn").setAttribute("aria-pressed", String(!!state.tv));
  const current = phase();
  const order = ["setup", "draft", "live"];
  const active = current === "idle" ? "setup" : current === "draft" ? "draft" : "live";
  const activeIndex = order.indexOf(active);
  document.querySelectorAll("#steps li").forEach((item) => {
    const index = order.indexOf(item.dataset.step);
    item.classList.toggle("on", item.dataset.step === active);
    item.classList.toggle("done", index > -1 && index < activeIndex);
  });
  const status = $("status");
  if (current === "idle") status.textContent = "Lobby";
  else if (current === "draft") status.textContent = "Équipes";
  else if (current === "ready") status.textContent = "Matchs";
  else if (tournamentOver()) status.textContent = "Terminé";
  else {
    const match = currentMatch();
    status.textContent = match ? `Journée ${match.round}` : "En cours";
  }
  document.querySelectorAll(".nav-btn").forEach((button) => {
    const on = button.dataset.go === state.view;
    button.classList.toggle("on", on);
    button.setAttribute("aria-current", on ? "page" : "false");
  });
}

function paintSetupMeta() {
  const isLocked = locked();
  $("lock-note").hidden = !isLocked;
  $("add-player").disabled = isLocked;
  $("player-name").disabled = isLocked;
  document.querySelectorAll(".format").forEach((button) => {
    button.classList.toggle("on", button.dataset.format === state.format);
    button.setAttribute("aria-pressed", String(button.dataset.format === state.format));
    button.disabled = isLocked;
  });
  const caps = plan(state.players.length, FORMAT_SIZE[state.format]);
  const hint = $("format-hint");
  const start = $("start-btn");
  $("reset-draw").hidden = !isLocked;
  if (!state.players.length) hint.textContent = "Ajoute au moins deux joueurs.";
  else if (!caps) hint.textContent = "Pas assez de joueurs pour ce format.";
  else {
    const short = caps.some((cap) => cap < FORMAT_SIZE[state.format]);
    hint.textContent = `${state.players.length} joueurs → ${describe(caps)}.${short ? " Une équipe incomplète." : ""}`;
  }
  const need = caps ? caps.length : 0;
  const enoughHat = !caps || state.selectedTeams.length >= need;
  if (caps && !enoughHat) hint.textContent += ` Il faut au moins ${need} équipes dans le chapeau.`;
  const blank = state.players.some((item) => !item.name.trim());
  start.hidden = isLocked;
  start.disabled = !caps || !enoughHat || blank;
  $("hat-count").textContent = String(state.selectedTeams.length);
  document.querySelectorAll("#team-filters .chip-btn").forEach((button) => {
    button.classList.toggle("on", button.dataset.filter === state.teamFilter);
  });
}

function paintPlayers(force) {
  const list = $("player-list");
  if (!force && document.activeElement && document.activeElement.closest("#player-list")) return;
  if (!state.players.length) {
    list.innerHTML = `<li class="empty-copy">Le vestiaire est vide. Ajoute tout le monde.</li>`;
    return;
  }
  const isLocked = locked();
  list.innerHTML = state.players.map((item) => `
    <li class="player">
      <i style="background:${item.color}"></i>
      <input data-player="${item.id}" value="${esc(item.name)}" maxlength="18" ${isLocked ? "readonly" : ""} aria-label="Nom du joueur">
      <button type="button" data-action="remove-player" data-id="${item.id}" aria-label="Retirer ${esc(item.name)}" ${isLocked ? "disabled" : ""}>×</button>
    </li>
  `).join("");
}

function visibleTeams() {
  const query = $("team-search").value.trim().toLocaleLowerCase("fr");
  return TEAMS.filter((team) => {
    if (state.teamFilter !== "all" && team.kind !== state.teamFilter) return false;
    if (!query) return true;
    return team.name.toLocaleLowerCase("fr").includes(query);
  });
}

function paintTeams() {
  const host = $("team-grid");
  const top = host.scrollTop;
  const query = $("team-search").value.trim();
  const list = visibleTeams();
  const groups = state.teamFilter === "all" && !query
    ? [...new Set(list.map((team) => team.league || (team.kind === "nation" ? "Sélections" : "Clubs")))].map((title) => [title, list.filter((team) => (team.league || (team.kind === "nation" ? "Sélections" : "Clubs")) === title)])
    : [["Résultats", list]];
  host.innerHTML = groups.map(([title, items]) => `
    <h3>${title}</h3>
    <div class="chips">
      ${items.map((team) => `
        <button type="button" class="team-chip ${state.selectedTeams.includes(team.id) ? "on" : ""}" data-action="toggle-team" data-id="${team.id}" aria-pressed="${state.selectedTeams.includes(team.id)}">
          ${logoFile(team) ? `<img class="crest" src="${logoFile(team)}" alt="">` : `<i style="background:linear-gradient(140deg, ${team.colors[0]}, ${team.colors[1]})"></i>`}
          <span>${esc(team.name)}</span>
          <small>${esc(team.place ? `${team.league} · ${team.place}` : team.kind === "nation" ? "sél." : RARITY_LABEL[team.rarity])}</small>
        </button>
      `).join("") || `<p class="empty-copy">Aucune équipe.</p>`}
    </div>
  `).join("");
  host.scrollTop = top;
  $("hat-count").textContent = String(state.selectedTeams.length);
}

function paintDraw() {
  const current = phase();
  $("draw-empty").hidden = current !== "idle";
  $("draft-panel").hidden = current !== "draft";
  $("pack-panel").hidden = current === "idle" || current === "draft";
  $("draw-title").textContent = current === "draft" || current === "idle" ? "La roue" : "Les équipes";
  const lead = $("draw-lead");
  lead.textContent = "";
  if (current === "draft") {
    const remaining = remainingPlayers();
    if (!busy) mainWheel.setItems(toWheelItems(remaining));
    const slot = nextSlot();
    const index = slot ? state.squads.indexOf(slot) + 1 : 0;
    $("draft-status").textContent = slot
      ? `Équipe ${index} · joueur ${slot.playerIds.length + 1} sur ${slot.cap} · ${remaining.length} encore dans la roue`
      : "Équipes complètes.";
    $("spin-btn").disabled = busy || remaining.length < 2;
    $("auto-btn").disabled = busy || !remaining.length;
    paintSlots();
    requestAnimationFrame(() => mainWheel.fit());
  }
  if (current === "ready" || current === "live") paintReady();
}

function paintSlots() {
  const current = nextSlot();
  $("slot-board").innerHTML = state.squads.map((item, index) => `
    <article class="squad ${item.playerIds.length >= item.cap ? "full" : ""} ${current && current.id === item.id ? "current" : ""}">
      <header><span>Équipe ${index + 1}</span><span>${item.playerIds.length}/${item.cap}</span></header>
      <div class="slots">
        ${Array.from({ length: item.cap }, (_, slot) => {
          const person = player(item.playerIds[slot]);
          const isNext = current && current.id === item.id && slot === item.playerIds.length;
          return person
            ? `<div class="slot filled" style="--c:${person.color}"><b>${esc(person.name)}</b></div>`
            : `<div class="slot empty ${isNext ? "next" : ""}">Joueur ${slot + 1}</div>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function paintPacks() {
  $("pack-grid").innerHTML = state.squads.map((item, index) => {
    const names = esc(memberNames(item));
    if (!item.teamId) {
      return `<article data-squad="${item.id}"><div class="pack-foil"><span>PACK ${String(index + 1).padStart(2, "0")}</span><strong>Équipe ${index + 1}</strong><em>${names}</em></div></article>`;
    }
    const team = teamById(item.teamId);
    const challenge = challengeById(item.challengeId);
    const alts = pickTeamFor(item, true);
    const canReroll = !state.matches.length && item.rerolls < 1 && !!alts;
    return `
      <article class="club-card ${item.justOpened ? "is-reveal" : ""}" data-squad="${item.id}" style="--rarity:${rarityColor(team.rarity)}">
        <div class="rarity">${RARITY_LABEL[team.rarity]}</div>
        ${shieldHTML(team)}
        <h3>${esc(team.name)}</h3>
        <p>${names}</p>
        <p class="defi">Défi : ${esc(challenge ? challenge.label : "aucun")}</p>
        ${canReroll ? `<button type="button" class="ghost sm" data-action="reroll" data-id="${item.id}">Relancer le pack</button>` : ""}
      </article>
    `;
  }).join("");
  const actions = $("pack-actions");
  const closed = state.squads.some((item) => !item.teamId);
  if (closed) {
    actions.innerHTML = `
      <button type="button" class="gold xl" data-action="open-one" data-busy="1" ${busy ? "disabled" : ""}>Ouvrir le pack</button>
      <button type="button" class="ghost" data-action="open-all" data-busy="1" ${busy ? "disabled" : ""}>Tout ouvrir</button>
    `;
  } else if (!state.matches.length) {
    actions.innerHTML = `<button type="button" class="gold xl" data-action="build">Lancer le tournoi</button>`;
  } else {
    actions.innerHTML = `<button type="button" class="gold" data-go="matches">Voir les matchs</button>`;
  }
}

function paintReady() {
  $("pack-grid").innerHTML = state.squads.map((item, index) => `
    <article class="club-card">
      <div class="rarity">Équipe ${index + 1}</div>
      <h3>${esc(memberNames(item))}</h3>
      <p class="defi">${item.challengeId ? `Défi : ${esc(challengeById(item.challengeId)?.label || "—")}` : "Club retiré avant chaque match"}</p>
    </article>
  `).join("");
  const actions = $("pack-actions");
  if (!state.matches.length) {
    actions.innerHTML = `<button type="button" class="gold xl" data-action="build">Lancer le tournoi</button>`;
  } else {
    actions.innerHTML = `<button type="button" class="gold" data-go="matches">Voir les matchs</button>`;
  }
}

function paintMatches() {
  const stage = $("match-stage");
  const tools = $("match-tools");
  const list = $("match-list");
  if (!state.matches.length) {
    stage.innerHTML = `<div class="card empty"><h2>Pas encore de matchs</h2><button type="button" class="gold" data-go="${state.squads.length ? "draw" : "setup"}">Continuer le tirage</button></div>`;
    tools.innerHTML = "";
    list.innerHTML = "";
    $("leader-line").textContent = "";
    return;
  }
  const rows = standings();
  $("leader-line").textContent = rows[0].pts > 0 ? `En tête : ${teamName(rows[0].squad)} · ${rows[0].pts} pts` : "";
  const current = currentMatch();
  if (!current && tournamentOver()) {
    const leaders = rows.filter((row) => row.pts === rows[0].pts && row.gd === rows[0].gd && row.gf === rows[0].gf);
    stage.innerHTML = `
      <div class="card champion">
        <p class="kicker">${leaders.length > 1 ? "Titre partagé" : "Champion de la soirée"}</p>
        <h3>${leaders.map((row) => esc(teamName(row.squad))).join(" · ")}</h3>
        <p>${leaders.map((row) => esc(memberNames(row.squad))).join(" / ")}</p>
        <button type="button" class="gold" data-go="rank">Voir le classement</button>
      </div>`;
  } else if (current) {
    stage.innerHTML = clubsReady(current) ? scorebugHTML(current) : drawClubsHTML(current);
  } else stage.innerHTML = "";
  const played = state.matches.some((match) => match.played);
  tools.innerHTML = `
    ${played ? `<button type="button" class="ghost" data-action="undo">Annuler le dernier score</button>` : ""}
    ${played ? `<button type="button" class="ghost" data-action="reset-scores">Remettre les scores à zéro</button>` : ""}
    <button type="button" class="danger" data-action="reset-draw">Refaire le tirage</button>
  `;
  const rounds = [...new Set(state.matches.map((match) => match.round))];
  list.innerHTML = rounds.map((round) => {
    const items = state.matches.filter((match) => match.round === round);
    if (!items.length) return "";
    return `<section class="round-block"><h3>Journée ${round}</h3>${items.map(matchRowHTML).join("")}</section>`;
  }).join("");
}

function drawClubsHTML(match) {
  const home = squad(match.home);
  const away = squad(match.away);
  return `
    <div class="card">
      <p class="kicker">Journée ${match.round}</p>
      <h2>${esc(teamName(home))} contre ${esc(teamName(away))}</h2>
      <p class="hint">Ouvre les packs. Chaque équipe reçoit un club pour ce match.</p>
      <button type="button" class="gold xl" data-action="draw-clubs" data-id="${match.id}" ${busy ? "disabled" : ""}>Ouvrir les packs</button>
    </div>
  `;
}
function scorebugHTML(match) {
  const home = squad(match.home);
  const away = squad(match.away);
  const plan = penaltyPlan(match);
  const gap = goalGap(match);
  const preview = gap > 3 && match.hs !== match.as
    ? `Écart ${gap} · au choix`
    : plan.n
    ? "1 habit"
    : match.hs === match.as && (match.hs || match.as) ? "Nul · 0 habit" : "Égalité";
  return `
    <div class="scorebug">
      <div class="bug-top">
        <span>Journée ${match.round}</span>
        <span class="stake">${esc(preview)}</span>
      </div>
      ${bugRow(home, match, "h")}
      ${bugRow(away, match, "a")}
      <div class="bug-actions">
        <button type="button" class="gold" data-action="validate" data-id="${match.id}">Valider le score</button>
        <button type="button" class="ghost" data-action="draw-clubs" data-id="${match.id}">Changer les clubs</button>
        <button type="button" class="ghost" data-action="scan-score" data-id="${match.id}">Photo du score</button>
      </div>
    </div>
  `;
}
function bugRow(item, match, side) {
  const team = sideClub(match, side);
  const score = side === "h" ? match.hs : match.as;
  const challenge = challengeById(item.challengeId);
  const removed = removedMap();
  const gone = teamRemovedCount(item, removed);
  return `
    <div class="bug-row">
      ${team ? shieldHTML(team) : ""}
      <div>
        <div class="team-name">${esc(team ? team.name : teamName(item))}</div>
        <div class="members">${esc(memberNames(item))}${gone ? ` · <span class="gone">${gone} habit${gone > 1 ? "s" : ""} en moins</span>` : ""}</div>
        <div class="defi">Défi : ${esc(challenge ? challenge.label : "—")}</div>
      </div>
      <div class="score-num">${score}</div>
      <div class="stepper">
        <button type="button" data-action="bump" data-id="${match.id}" data-side="${side}" data-delta="1" aria-label="Ajouter un but">+</button>
        <button type="button" data-action="bump" data-id="${match.id}" data-side="${side}" data-delta="-1" aria-label="Retirer un but">−</button>
      </div>
    </div>
  `;
}
function matchRowHTML(match) {
  if (!match.away) {
    const item = squad(match.home);
    return `<div class="bye"><span>Repos</span><span>${item ? esc(teamName(item)) : ""}</span></div>`;
  }
  const home = squad(match.home);
  const away = squad(match.away);
  const score = match.played ? `${match.hs}–${match.as}` : "à jouer";
  const loser = loserOf(match);
  const winner = winnerOf(match);
  const stakes = matchStakes(match);
  const restores = matchRestores(match);
  const left = remainingSpins(match);
  let gage = "";
  if (awaitsChoice(match)) {
    gage = `<button type="button" class="gage-tag pending" data-action="blowout" data-id="${match.id}">Choisir : retirer ou remettre</button>`;
  } else if (loser && (stakes.length || restores.length || left)) {
    if (winner && restores.length) {
      gage += restores.map((item) => `<span class="gage-tag back">${esc(teamName(winner))} remet ${esc(clothById(item.id)?.label || item.label)}</span>`).join("");
    }
    if (stakes.length) {
      gage += stakes.map((stake) => `<span class="gage-tag">${esc(teamName(loser))} : ${esc(clothById(stake.id)?.label || stake.label)}</span>`).join("");
    }
    if (left && clothesLeftFor(match).length) {
      gage += `<button type="button" class="gage-tag pending" data-action="stake" data-id="${match.id}">Tourner la roue</button>`;
    }
  } else if (loser && clothesLeftFor(match).length && !blowout(match)) {
    gage = `<button type="button" class="gage-tag pending" data-action="stake" data-id="${match.id}">Tourner la roue</button>`;
  } else if (match.played && !loser) gage = `<span class="gage-tag safe">Nul</span>`;
  const live = currentMatch()?.id === match.id;
  const homeClub = sideClub(match, "h");
  const awayClub = sideClub(match, "a");
  return `
    <div class="match-row${live ? " now" : ""}">
      <button type="button" class="link versus" data-action="spotlight" data-id="${match.id}">
        <span class="side"><b>${esc(teamName(home))}</b>${homeClub ? `<small>${esc(homeClub.name)}</small>` : ""}</span>
        <span class="vs">vs</span>
        <span class="side"><b>${esc(teamName(away))}</b>${awayClub ? `<small>${esc(awayClub.name)}</small>` : ""}</span>
      </button>
      <span class="sc">${live && !match.played ? "en cours" : score}</span>
      ${match.played ? `<button type="button" class="ghost sm" data-action="unlock" data-id="${match.id}">Modifier</button>` : `<button type="button" class="ghost sm" data-action="spotlight" data-id="${match.id}">${clubsReady(match) ? "Jouer" : "Packs"}</button>`}
      ${gage ? `<div class="gage-line">${gage}</div>` : ""}
    </div>
  `;
}

function paintRank() {
  const stage = $("rank-stage");
  const tools = $("rank-tools");
  if (!state.matches.length) {
    tools.innerHTML = "";
    stage.innerHTML = `<div class="card empty"><h2>Pas encore de classement</h2><button type="button" class="gold" data-go="matches">Voir les matchs</button></div>`;
    return;
  }
  const rows = standings();
  const leaders = rows.filter((row) => row.pts === rows[0].pts && row.gd === rows[0].gd && row.gf === rows[0].gf);
  const showPodium = rows.some((row) => row.played) || tournamentOver();
  const podium = showPodium ? podiumHTML(rows, leaders) : "";
  const goals = state.matches.reduce((sum, match) => sum + (match.played && match.away ? match.hs + match.as : 0), 0);
  let best = null;
  state.matches.forEach((match) => {
    if (!match.played || !match.away) return;
    const diff = Math.abs(match.hs - match.as);
    if (!best || diff > best.diff) best = { match, diff };
  });
  const bestText = best && best.diff > 0
    ? `${teamName(squad(best.match.hs >= best.match.as ? best.match.home : best.match.away))} ${Math.max(best.match.hs, best.match.as)}–${Math.min(best.match.hs, best.match.as)}`
    : "Encore rien";
  const removed = removedMap();
  tools.innerHTML = `<button type="button" class="ghost" data-action="copy-rank">Copier le classement</button>`;
  stage.innerHTML = `
    ${tournamentOver() ? `<div class="champion"><p class="kicker">${leaders.length > 1 ? "Titre partagé" : "Champion"}</p><h3>${leaders.map((row) => esc(teamName(row.squad))).join(" · ")}</h3></div>` : ""}
    ${podium}
    <div class="stats-row">
      <div class="stat"><span>Buts dans la soirée</span><b>${goals}</b></div>
      <div class="stat"><span>Plus grosse victoire</span><b>${esc(bestText)}</b></div>
      <div class="stat"><span>Matchs joués</span><b>${realMatches().filter((match) => match.played).length}/${realMatches().length}</b></div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>#</th><th class="team">Équipe</th><th>J</th><th>V</th><th>N</th><th>D</th><th>BP</th><th>BC</th><th>Diff</th><th>Bonus</th><th>Pts</th><th>Habits retirés</th></tr>
        </thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr class="${index === 0 && row.pts > 0 ? "leader" : ""}">
              <td>${index + 1}</td>
              <td class="team">${esc(teamName(row.squad))}</td>
              <td>${row.played}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td>
              <td>${row.gf}</td><td>${row.ga}</td><td>${row.gd > 0 ? `+${row.gd}` : row.gd}</td>
              <td>${row.bonus}</td><td class="pts">${row.pts}</td><td>${teamRemovedCount(row.squad, removed)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <p class="hint">Victoire 3 pts · Nul 1 pt · Défi +1</p>
    ${wardrobeHTML(removed)}
  `;
}
let seenGone = null;
function takeFresh(removed) {
  const fresh = {};
  Object.keys(removed).forEach((pid) => {
    const before = seenGone ? seenGone[pid] || [] : removed[pid];
    fresh[pid] = removed[pid].filter((id) => !before.includes(id));
  });
  seenGone = JSON.parse(JSON.stringify(removed));
  return fresh;
}
function undressLevel(count) {
  const pct = Math.round((count / CLOTHES.length) * 100);
  if (pct === 0) return { pct, heat: 0 };
  if (pct <= 30) return { pct, heat: 1 };
  if (pct <= 60) return { pct, heat: 2 };
  if (pct < 100) return { pct, heat: 3 };
  return { pct, heat: 4 };
}
function figureSVG(person, gone, fresh) {
  const cls = (id) => `piece ${fresh.includes(id) ? "drop" : gone.includes(id) ? "off" : ""}`;
  const top = person.color;
  return `
    <svg class="figure" viewBox="0 0 100 170" role="img" aria-label="${esc(person.name)} : ${gone.length} habit${gone.length > 1 ? "s" : ""} retiré${gone.length > 1 ? "s" : ""}">
      <g class="body">
        <circle cx="50" cy="22" r="13"/>
        <rect x="45" y="32" width="10" height="9" rx="3"/>
        <rect x="32" y="39" width="36" height="46" rx="9"/>
        <rect x="22" y="42" width="10" height="40" rx="5"/>
        <rect x="68" y="42" width="10" height="40" rx="5"/>
        <circle cx="27" cy="86" r="5"/>
        <circle cx="73" cy="86" r="5"/>
        <rect x="34" y="82" width="14" height="68" rx="6"/>
        <rect x="52" y="82" width="14" height="68" rx="6"/>
        <ellipse cx="41" cy="152" rx="8" ry="4"/>
        <ellipse cx="59" cy="152" rx="8" ry="4"/>
      </g>
      <g class="${cls("socks")}"><rect x="34.5" y="134" width="13" height="16" rx="3" fill="#f2f2f2"/><rect x="52.5" y="134" width="13" height="16" rx="3" fill="#f2f2f2"/></g>
      <g class="${cls("boxer")}"><rect class="under" x="32.5" y="80" width="35" height="17" rx="6"/></g>
      <g class="${cls("pants")}" fill="#35548a">
        <rect x="31.5" y="77" width="37" height="16" rx="6"/>
        <rect x="32.5" y="86" width="16" height="52" rx="5"/>
        <rect x="51.5" y="86" width="16" height="52" rx="5"/>
      </g>
      <g class="${cls("shirt")}" fill="${top}">
        <rect x="31" y="38" width="38" height="44" rx="9"/>
        <rect x="21" y="41" width="12" height="18" rx="5"/>
        <rect x="67" y="41" width="12" height="18" rx="5"/>
      </g>
      <g class="${cls("pull")}" fill="#1e2a35">
        <rect x="20" y="40" width="13" height="40" rx="6"/>
        <rect x="67" y="40" width="13" height="40" rx="6"/>
        <rect x="30" y="37" width="14" height="48" rx="6"/>
        <rect x="56" y="37" width="14" height="48" rx="6"/>
      </g>
    </svg>
  `;
}
function figureCard(person, gone, fresh, extra = "") {
  const level = undressLevel(gone.length);
  const dropped = fresh.map((id) => clothById(id)?.label).filter(Boolean);
  return `
    <article class="fig-card heat-${level.heat} ${fresh.length ? "shiver" : ""} ${extra}">
      <div class="fig-wrap">
        ${figureSVG(person, gone, fresh)}
        ${dropped.map((label, index) => `<span class="drop-tag" style="animation-delay:${index * 0.25}s">−${esc(label)}</span>`).join("")}
      </div>
      <strong>${esc(person.name)}</strong>
      <div class="heat-bar"><b style="width:${level.pct}%"></b></div>
      <small>${gone.length}/${CLOTHES.length} retirés</small>
    </article>
  `;
}
function wardrobeHTML(removed) {
  const fresh = takeFresh(removed);
  const people = state.players
    .map((person) => ({ person, gone: removed[person.id] || [] }))
    .sort((a, b) => b.gone.length - a.gone.length || a.person.name.localeCompare(b.person.name, "fr"));
  return `
    <section class="wardrobe">
      <div class="section-head">
        <div>
          <p class="kicker">Habits retirés</p>
          <h2>Le vestiaire</h2>
        </div>
      </div>
      <div class="wardrobe-grid">
        ${people.map(({ person, gone }) => `
          <article class="locker">
            ${figureCard(person, gone, fresh[person.id] || [])}
            <div class="clothes">
              ${CLOTHES.map((item) => `<span class="cloth ${gone.includes(item.id) ? "off" : ""}" title="${esc(item.full)}">${esc(item.label)}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
function podiumHTML(rows) {
  const places = [
    { row: rows[0], cls: "first", label: "1er" },
    { row: rows[1], cls: "second", label: "2e" },
    { row: rows[2], cls: "third", label: "3e" }
  ].filter((place) => place.row);
  return `<div class="podium">${places.map((place) => `<article class="pod ${place.cls}"><div class="place">${place.label}</div><strong>${esc(teamName(place.row.squad))}</strong><p class="pts">${place.row.pts} pts</p></article>`).join("")}</div>`;
}

function refresh() {
  save();
  paintChrome();
  if (state.view === "setup") {
    paintSetupMeta();
    paintPlayers();
    paintTeams();
  } else if (state.view === "draw") paintDraw();
  else if (state.view === "matches") paintMatches();
  else if (state.view === "rank") paintRank();
}

function show(view) {
  state.view = view;
  ["setup", "draw", "matches", "rank"].forEach((name) => {
    $(`view-${name}`).hidden = name !== view;
  });
  save();
  paintChrome();
  if (view === "setup") {
    paintSetupMeta();
    paintPlayers(true);
    paintTeams();
  } else if (view === "draw") {
    paintDraw();
    requestAnimationFrame(() => mainWheel.fit());
  } else if (view === "matches") paintMatches();
  else paintRank();
}

function openModal(html, label) {
  const dialog = $("modal");
  dialog.setAttribute("aria-label", label || "Fenêtre");
  dialog.innerHTML = html;
  modalAlive = true;
  if (!dialog.open) dialog.showModal();
}
let modalAlive = false;
function modalClosed() {
  if (!modalAlive) return;
  modalAlive = false;
  stakeToken += 1;
  if (state.view === "matches") paintMatches();
  else if (state.view === "rank") paintRank();
}
function closeModal() {
  if (confirmResolve) return confirmResolve(false);
  const dialog = $("modal");
  if (dialog.open) dialog.close();
  modalClosed();
}
function ask({ title, text, confirm, danger }) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      confirmResolve = null;
      resolve(value);
    };
    confirmResolve = (value) => {
      const dialog = $("modal");
      dialog.removeEventListener("close", onClose);
      if (dialog.open) dialog.close();
      modalAlive = false;
      finish(value);
    };
    const onClose = () => finish(false);
    openModal(`
      <div class="modal-head"><h2>${title}</h2><button type="button" data-action="close-modal" aria-label="Fermer">×</button></div>
      <p class="modal-copy">${text}</p>
      <div class="btn-row">
        <button type="button" class="${danger ? "danger" : "gold"}" data-action="confirm-yes">${confirm}</button>
        <button type="button" class="ghost" data-action="confirm-no">Annuler</button>
      </div>
    `, title);
    $("modal").addEventListener("close", onClose, { once: true });
  });
}

function addPlayer() {
  if (locked()) return toast("Le tirage est déjà lancé.");
  if (state.players.length >= 16) return toast("16 joueurs maximum.");
  const input = $("player-name");
  const name = input.value.trim().replace(/\s+/g, " ");
  if (!name) return toast("Écris un nom.");
  if (state.players.some((item) => item.name.toLocaleLowerCase("fr") === name.toLocaleLowerCase("fr"))) return toast("Ce nom est déjà pris.");
  const used = new Set(state.players.map((item) => item.color));
  const color = PALETTE.find((item) => !used.has(item)) || PALETTE[state.players.length % PALETTE.length];
  state.players.push({ id: uid(), name, color });
  input.value = "";
  save();
  paintPlayers(true);
  paintSetupMeta();
  paintChrome();
  input.focus();
}

function startDraw() {
  if (locked() || busy) return;
  const caps = plan(state.players.length, FORMAT_SIZE[state.format]);
  if (!caps) return toast("Pas assez de joueurs pour deux équipes.");
  if (state.players.some((item) => !item.name.trim())) return toast("Chaque joueur a besoin d’un nom.");
  if (state.selectedTeams.length < caps.length) return toast(`Ajoute au moins ${caps.length} équipes dans le chapeau.`);
  state.squads = caps.map((cap) => ({ id: uid(), cap, playerIds: [], teamId: null, challengeId: null, rerolls: 0 }));
  state.matches = [];
  state.spotlight = null;
  state.celebrated = false;
  if (state.format === "solo") {
    shuffle(state.players).forEach((item, index) => { state.squads[index].playerIds = [item.id]; });
    save();
    revealSchedule();
    return;
  }
  save();
  show("draw");
}

async function spinOnce() {
  if (busy || phase() !== "draft") return;
  let remaining = remainingPlayers();
  if (!remaining.length) return;
  if (remaining.length === 1) {
    const slot = nextSlot();
    slot.playerIds.push(remaining[0].id);
    if (!revealSchedule()) {
      toast(`${remaining[0].name} ferme la dernière place.`);
      refresh();
    }
    return;
  }
  busy = true;
  paintDraw();
  const index = Math.floor(Math.random() * remaining.length);
  mainWheel.setItems(toWheelItems(remaining));
  try {
    await mainWheel.spinTo(index, { ...wheelTiming(true), onTick: () => Sfx.tick() });
    const chosen = remaining[index];
    const slot = nextSlot();
    slot.playerIds.push(chosen.id);
    remaining = remainingPlayers();
    if (remaining.length === 1 && nextSlot()) {
      nextSlot().playerIds.push(remaining[0].id);
      toast(`${chosen.name} est tiré. ${remaining[0].name} prend la dernière place.`);
    } else toast(`${chosen.name} rejoint l’équipe.`);
  } finally {
    busy = false;
    if (!revealSchedule()) refresh();
  }
}

async function autoDraft() {
  if (busy || phase() !== "draft") return;
  busy = true;
  paintDraw();
  try {
    let guard = 0;
    while (nextSlot() && guard < 30) {
      guard += 1;
      const remaining = remainingPlayers();
      if (!remaining.length) break;
      if (remaining.length === 1) {
        nextSlot().playerIds.push(remaining[0].id);
        save();
        paintSlots();
        break;
      }
      const index = Math.floor(Math.random() * remaining.length);
      mainWheel.setItems(toWheelItems(remaining));
      await mainWheel.spinTo(index, { ...wheelTiming(false), onTick: () => Sfx.tick() });
      nextSlot().playerIds.push(remaining[index].id);
      save();
      paintSlots();
      $("draft-status").textContent = `${remaining[index].name} est placé.`;
    }
    Sfx.reveal("rare");
  } finally {
    busy = false;
    if (!revealSchedule()) refresh();
  }
}

async function openOne() {
  const item = state.squads.find((squadItem) => !squadItem.teamId);
  if (!item) return false;
  const card = document.querySelector(`[data-squad="${item.id}"] .pack-foil`);
  if (card && !state.express) {
    card.classList.add("is-shaking");
    Sfx.pack();
    await wait(680);
  } else {
    Sfx.pack();
    await wait(state.express ? 120 : 160);
  }
  const teamId = pickTeamFor(item, false);
  if (!teamId) {
    toast("Plus assez d’équipes dans le chapeau.");
    return false;
  }
  state.squads.forEach((squadItem) => { squadItem.justOpened = false; });
  item.teamId = teamId;
  item.challengeId = pickChallenge();
  item.justOpened = true;
  save();
  paintPacks();
  const team = teamById(teamId);
  if (team.rarity === "legende" || team.rarity === "epique") confetti.burst(team.rarity === "legende" ? 130 : 70);
  Sfx.reveal(team.rarity);
  toast(`${team.name} · ${RARITY_LABEL[team.rarity]}`);
  await wait(state.express ? 220 : 640);
  item.justOpened = false;
  return true;
}

async function openAll() {
  if (busy) return;
  busy = true;
  document.querySelectorAll("#pack-actions button").forEach((button) => { button.disabled = true; });
  try {
    while (state.squads.some((item) => !item.teamId)) {
      const opened = await openOne();
      if (!opened) break;
    }
  } finally {
    busy = false;
    paintChrome();
    document.querySelectorAll("#pack-actions button").forEach((button) => { button.disabled = false; });
  }
}

function buildTournament() {
  state.squads.forEach((item) => {
    if (!item.challengeId) item.challengeId = pickChallenge();
  });
  const rounds = roundRobin(state.squads.map((item) => item.id));
  state.matches = [];
  rounds.forEach((pairs, round) => {
    pairs.forEach(([left, right]) => {
      const home = left || right;
      const away = left && right ? right : null;
      if (!home) return;
      state.matches.push({
        id: uid(),
        round: round + 1,
        home,
        away,
        homeClub: null,
        awayClub: null,
        hs: 0,
        as: 0,
        stakes: [],
        played: false,
        playedAt: 0
      });
    });
  });
  state.spotlight = null;
  state.celebrated = false;
  save();
  show("matches");
}

function revealSchedule() {
  if (phase() !== "ready" || state.matches.length) return false;
  buildTournament();
  toast("Les équipes sont faites. Voici tous les matchs.");
  return true;
}

function clubCardHTML(team, caption) {
  return `
    <article class="club-card is-reveal" style="--rarity:${rarityColor(team.rarity)}">
      <div class="rarity">${RARITY_LABEL[team.rarity]}</div>
      ${shieldHTML(team)}
      <h3>${esc(team.name)}</h3>
      <p>${esc(caption)}</p>
    </article>`;
}

async function openMatchPacks(id) {
  if (busy) return;
  const match = matchById(id);
  if (!match || !match.away || match.played) return;
  const pool = shuffle(state.selectedTeams.slice());
  if (pool.length < 2) return toast("Il faut au moins deux clubs dans le chapeau.");
  state.spotlight = match.id;
  if (state.view !== "matches") show("matches");
  busy = true;
  const home = squad(match.home);
  const away = squad(match.away);
  const stage = $("match-stage");
  stage.innerHTML = `
    <div class="pack-grid">
      <article><div class="pack-foil"><span>PACK</span><strong>${esc(teamName(home))}</strong><em>Club du match</em></div></article>
      <article><div class="pack-foil"><span>PACK</span><strong>${esc(teamName(away))}</strong><em>Club du match</em></div></article>
    </div>`;
  try {
    const cards = stage.querySelectorAll(".pack-foil");
    if (!state.express) {
      cards.forEach((card) => card.classList.add("is-shaking"));
      Sfx.pack();
      await wait(680);
    } else {
      Sfx.pack();
      await wait(140);
    }
    match.homeClub = pool[0];
    match.awayClub = pool[1];
    save();
    const homeClub = sideClub(match, "h");
    const awayClub = sideClub(match, "a");
    stage.innerHTML = `<div class="pack-grid">${clubCardHTML(homeClub, teamName(home))}${clubCardHTML(awayClub, teamName(away))}</div>`;
    if (homeClub.rarity === "legende" || awayClub.rarity === "legende") confetti.burst(90);
    Sfx.reveal(homeClub.rarity === "legende" || awayClub.rarity === "legende" ? "legende" : "epique");
    toast(`${homeClub.name} contre ${awayClub.name}`);
    await wait(state.express ? 320 : 900);
  } finally {
    busy = false;
    if (state.view === "matches") paintMatches();
    paintChrome();
  }
}

function validateMatch(id) {
  const match = matchById(id);
  if (!match || !match.away) return;
  if (!clubsReady(match)) return toast("Relance les clubs d’abord.");
  match.played = true;
  match.playedAt = Date.now();
  state.spotlight = null;
  const home = squad(match.home);
  const away = squad(match.away);
  clearGage(match);
  let message = "";
  const loser = loserOf(match);
  const winner = winnerOf(match);
  if (!loser) message = "Match nul.";
  else if (blowout(match)) {
    message = `${teamName(winner)} l’emporte · écart de ${goalGap(match)} · au choix`;
    confetti.burst(80);
  } else {
    message = `${teamName(winner)} l’emporte · 1 habit`;
    confetti.burst(80);
  }
  const bonuses = [home, away].filter((item) => challengeHit(item, match)).map((item) => teamName(item));
  if (bonuses.length) message += ` · défi ${bonuses.join(", ")}`;
  if (tournamentOver()) {
    state.celebrated = true;
    confetti.burst(160);
    Sfx.fanfare();
    message += " · terminé";
  }
  toast(message);
  refresh();
  if (loser) {
    if (blowout(match)) setTimeout(() => openBlowoutChoice(match.id), state.express ? 150 : 700);
    else if (clothesLeftFor(match).length) setTimeout(() => openStake(match.id), state.express ? 150 : 700);
    else toast(`${teamName(loser)} n’a plus rien à retirer.`);
  }
}

function openBlowoutChoice(id) {
  const match = matchById(id);
  const loser = match && loserOf(match);
  const winner = match && winnerOf(match);
  if (!match || !loser || !winner || !blowout(match) || match.choice) return;
  const back = returnableClothes(winner, match.playedAt);
  const canStrip = clothesLeftFor(match).length > 0;
  if (!canStrip && !back.length) {
    match.choice = "strip";
    save();
    refresh();
    return toast(`${teamName(loser)} n’a plus rien à retirer.`);
  }
  const backLabel = back.length
    ? back.map((item) => item.label).join(", ")
    : "Rien enlevé au match d’avant";
  openModal(`
    <div class="modal-head"><h2>Écart de ${goalGap(match)}</h2><button type="button" data-action="close-modal" aria-label="Fermer">×</button></div>
    <p class="modal-copy"><b>${esc(teamName(winner))}</b> choisit.</p>
    <div class="choice-grid">
      <button type="button" class="choice" data-action="pick-strip" data-id="${match.id}" ${canStrip ? "" : "disabled"}>
        <strong>Retirer un vêtement</strong>
        <span>${canStrip ? `Roue classique pour ${esc(teamName(loser))}` : `${esc(teamName(loser))} n’a plus rien à retirer`}</span>
      </button>
      <button type="button" class="choice" data-action="pick-restore" data-id="${match.id}" ${back.length ? "" : "disabled"}>
        <strong>Remettre le vêtement</strong>
        <span>${esc(backLabel)}</span>
      </button>
    </div>
  `, "Choix du gagnant");
}

function applyRestore(match, cloth) {
  const winner = winnerOf(match);
  match.choice = "restore";
  match.restores = [{ id: cloth.id, label: cloth.label }];
  save();
  Sfx.reveal("rare");
  closeModal();
  toast(`${teamName(winner)} remet ${cloth.full}.`);
  refresh();
}

function openRestorePicker(id) {
  const match = matchById(id);
  const winner = match && winnerOf(match);
  if (!match || !winner) return;
  const back = returnableClothes(winner, match.playedAt);
  if (!back.length) return toast("Rien à remettre du match d’avant.");
  if (back.length === 1) return applyRestore(match, back[0]);
  openModal(`
    <div class="modal-head"><h2>Match d’avant</h2><button type="button" data-action="close-modal" aria-label="Fermer">×</button></div>
    <p class="modal-copy">Quel habit retiré au match d’avant revient.</p>
    <div class="cloth-picks">
      ${back.map((item) => `<button type="button" class="cloth pick" data-action="apply-restore" data-id="${match.id}" data-cloth="${item.id}">${esc(item.full)}</button>`).join("")}
    </div>
  `, "Remettre un vêtement");
}

function openStake(id) {
  const match = matchById(id);
  const loser = match && loserOf(match);
  if (!loser) return;
  if (!Array.isArray(match.stakes)) match.stakes = [];
  const pool = clothesLeftFor(match);
  if (!pool.length || remainingSpins(match) <= 0) return toast(pool.length ? "Roue déjà faite." : `${teamName(loser)} n’a plus rien à retirer.`);
  const token = ++stakeToken;
  const colors = ["#1e3d30", "#f0c86a", "#8e3a52", "#c8ff3d", "#234838", "#ff4f8b", "#315c48", "#7eb6ff", "#5a2a3a", "#fff0c2"];
  const names = loser.playerIds.map((pid) => player(pid)?.name || "?");
  const who = names.length > 1 ? `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}` : names[0];
  openModal(`
    <div class="modal-head"><h2>La roue</h2><button type="button" data-action="close-modal" aria-label="Fermer">×</button></div>
    <p class="modal-copy"><b>${esc(teamName(loser))}</b> · ${esc(who)} retire l’habit tiré.</p>
    <div class="stake-wheel"><div class="pointer" aria-hidden="true"></div><canvas id="stake-wheel" width="360" height="360"></canvas></div>
    <div class="btn-row center"><button type="button" class="gold xl" id="stake-spin">Tourner la roue</button></div>
  `, "Roue des habits");
  const wheel = new Wheel();
  wheel.mount($("stake-wheel"));
  wheel.setSize(Math.min(360, $("stake-wheel").parentElement.clientWidth || 360));
  wheel.setItems(pool.map((item, index) => ({
    label: item.label,
    color: colors[index % colors.length],
    ink: luminance(colors[index % colors.length]) > 0.6 ? "#172117" : "#f7f4ec"
  })));
  $("stake-spin").onclick = async () => {
    $("stake-spin").disabled = true;
    const index = Math.floor(Math.random() * pool.length);
    const timing = state.express ? { duration: 900, turns: 2 } : { duration: 3600, turns: 6 };
    const landed = await wheel.spinTo(index, { ...timing, onTick: () => Sfx.tick(), abort: () => token !== stakeToken });
    if (landed < 0 || token !== stakeToken) return;
    const item = pool[index];
    match.stakes = [{ id: item.id, label: item.label }];
    save();
    Sfx.reveal(item.heat >= 3 ? "legende" : "epique");
    confetti.burst(item.heat >= 3 ? 140 : 70);
    openModal(`
      <div class="stake-result">
        <p class="who">${esc(who)}</p>
        <strong>${esc(item.full)}</strong>
        <button type="button" class="gold" data-action="close-stake" data-id="${match.id}">C’est retiré</button>
      </div>
    `, item.label);
  };
}

function resetDrawData() {
  state.squads = [];
  state.matches = [];
  state.spotlight = null;
  state.celebrated = false;
}

function standingsText() {
  const rows = standings();
  const lines = [`${state.night || "Strip FIFA"}`, ""];
  rows.forEach((row, index) => {
    lines.push(`${index + 1}. ${teamName(row.squad)} (${memberNames(row.squad)}) — ${row.pts} pts, ${row.gf}-${row.ga}`);
  });
  const removed = removedMap();
  lines.push("", "Vestiaire :");
  state.players.forEach((person) => {
    const gone = (removed[person.id] || []).map((id) => clothById(id)?.label).filter(Boolean);
    lines.push(`- ${person.name} : ${gone.length ? gone.join(", ") : "tout sur soi"}`);
  });
  return lines.join("\n");
}

function loadOcr() {
  if (window.Tesseract) return Promise.resolve();
  if (ocrLoading) return ocrLoading;
  ocrLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.onload = resolve;
    script.onerror = () => {
      ocrLoading = null;
      reject(new Error("ocr"));
    };
    document.head.appendChild(script);
  });
  return ocrLoading;
}
function prepScoreImage(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const scale = Math.min(1, 1400 / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const ctx = canvas.getContext("2d");
      ctx.filter = "grayscale(1) contrast(1.45) brightness(1.08)";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image"));
    };
    img.src = url;
  });
}
function foldScoreText(text) {
  return String(text || "")
    .replace(/[Oo]/g, "0")
    .replace(/[Il|]/g, "1");
}
function validPair(a, b) {
  return Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0 && a <= 15 && b <= 15;
}
function parseScoreText(text, match) {
  const raw = String(text || "");
  const folded = foldScoreText(raw);
  const pairs = [];
  const dash = /(\d{1,2})\s*[-–—:xX/]\s*(\d{1,2})/g;
  let found;
  while ((found = dash.exec(folded))) {
    const a = Number(found[1]);
    const b = Number(found[2]);
    if (validPair(a, b)) pairs.push([a, b]);
  }
  const line = /(?:^|\n)[^\d\n]{0,20}(\d{1,2})[^\d\n]{1,16}(\d{1,2})[^\d\n]{0,20}(?:\n|$)/g;
  while ((found = line.exec(folded))) {
    const a = Number(found[1]);
    const b = Number(found[2]);
    if (validPair(a, b)) pairs.push([a, b]);
  }
  if (pairs.length) return pairs[0];
  const home = squad(match.home);
  const away = squad(match.away);
  const names = [
    [teamName(home), "h"],
    [teamById(match.homeClub)?.short || "", "h"],
    [teamName(away), "a"],
    [teamById(match.awayClub)?.short || "", "a"]
  ].filter((item) => item[0] && item[0].length >= 2);
  const upper = folded.toUpperCase();
  const scores = { h: null, a: null };
  names.forEach(([name, side]) => {
    const at = upper.indexOf(name.toUpperCase());
    if (at < 0) return;
    const around = upper.slice(Math.max(0, at - 10), at + name.length + 12);
    const num = around.match(/(\d{1,2})/);
    if (num && scores[side] == null) scores[side] = Number(num[1]);
  });
  if (validPair(scores.h, scores.a)) return [scores.h, scores.a];
  return null;
}
async function readScoreBlob(blob) {
  await loadOcr();
  const canvas = await prepScoreImage(blob);
  const result = await window.Tesseract.recognize(canvas, "eng");
  return result?.data?.text || "";
}
function applyScannedScore(match, pair) {
  match.hs = pair[0];
  match.as = pair[1];
  refresh();
  toast(`${pair[0]}-${pair[1]}`);
}
async function scanScoreFromBlob(blob) {
  const match = matchById(scanMatchId) || currentMatch();
  if (!match || match.played || !match.away) return toast("Ouvre un match d’abord.");
  if (busy) return;
  busy = true;
  toast("Lecture du score…");
  try {
    const text = await readScoreBlob(blob);
    const pair = parseScoreText(text, match);
    if (!pair) return toast("Score introuvable. Recadre le 2-1.");
    applyScannedScore(match, pair);
  } catch {
    toast("Scan raté. Tape le score.");
  } finally {
    busy = false;
  }
}

const actions = {
  "add-player": addPlayer,
  "remove-player"(button) {
    if (locked()) return;
    state.players = state.players.filter((item) => item.id !== button.dataset.id);
    refresh();
  },
  "set-format"(button) {
    if (locked()) return toast("Tirage déjà lancé.");
    state.format = button.dataset.format;
    refresh();
  },
  "team-filter"(button) {
    state.teamFilter = button.dataset.filter;
    save();
    paintSetupMeta();
    paintTeams();
  },
  "toggle-team"(button) {
    if (locked()) return toast("Tirage déjà lancé.");
    const id = button.dataset.id;
    const index = state.selectedTeams.indexOf(id);
    if (index >= 0) state.selectedTeams.splice(index, 1);
    else state.selectedTeams.push(id);
    save();
    paintTeams();
    paintSetupMeta();
  },
  "select-popular"() {
    if (locked()) return toast("Tirage déjà lancé.");
    state.selectedTeams = TEAMS.filter((team) => team.popular).map((team) => team.id);
    refresh();
  },
  "select-visible"() {
    if (locked()) return toast("Tirage déjà lancé.");
    visibleTeams().forEach((team) => {
      if (!state.selectedTeams.includes(team.id)) state.selectedTeams.push(team.id);
    });
    refresh();
  },
  "clear-visible"() {
    if (locked()) return toast("Tirage déjà lancé.");
    const visible = new Set(visibleTeams().map((team) => team.id));
    state.selectedTeams = state.selectedTeams.filter((id) => !visible.has(id));
    refresh();
  },
  "start-draw": startDraw,
  spin: spinOnce,
  "auto-draft": autoDraft,
  async "open-one"() {
    if (busy) return;
    busy = true;
    document.querySelectorAll("#pack-actions button").forEach((button) => { button.disabled = true; });
    try { await openOne(); } finally {
      busy = false;
      paintChrome();
      document.querySelectorAll("#pack-actions button").forEach((button) => { button.disabled = false; });
    }
  },
  "open-all": openAll,
  build: buildTournament,
  reroll(button) {
    const item = squad(button.dataset.id);
    if (!item || state.matches.length || item.rerolls >= 1) return;
    const next = pickTeamFor(item, true);
    if (!next) return toast("Aucune autre équipe disponible.");
    item.teamId = next;
    item.challengeId = pickChallenge();
    item.rerolls += 1;
    item.justOpened = true;
    const team = teamById(next);
    if (team.rarity === "legende") confetti.burst(100);
    Sfx.reveal(team.rarity);
    toast(`${team.name} · ${RARITY_LABEL[team.rarity]}`);
    refresh();
    item.justOpened = false;
  },
  "scan-score"(button) {
    const match = matchById(button.dataset.id);
    if (!match || match.played) return;
    scanMatchId = match.id;
    $("score-photo").value = "";
    $("score-photo").click();
  },
  bump(button) {
    const match = matchById(button.dataset.id);
    if (!match || match.played) return;
    const key = button.dataset.side === "h" ? "hs" : "as";
    match[key] = Math.max(0, Math.min(15, match[key] + Number(button.dataset.delta)));
    refresh();
  },
  validate(button) { validateMatch(button.dataset.id); },
  "draw-clubs"(button) { openMatchPacks(button.dataset.id); },
  stake(button) { openStake(button.dataset.id); },
  blowout(button) { openBlowoutChoice(button.dataset.id); },
  "pick-strip"(button) {
    const match = matchById(button.dataset.id);
    if (!match || match.choice) return;
    match.choice = "strip";
    save();
    closeModal();
    refresh();
    setTimeout(() => openStake(match.id), state.express ? 120 : 280);
  },
  "pick-restore"(button) { openRestorePicker(button.dataset.id); },
  "apply-restore"(button) {
    const match = matchById(button.dataset.id);
    const cloth = clothById(button.dataset.cloth);
    const winner = match && winnerOf(match);
    if (!match || !cloth || !winner) return;
    if (!returnableClothes(winner, match.playedAt).some((item) => item.id === cloth.id)) return toast("Cet habit ne vient pas du match d’avant.");
    applyRestore(match, cloth);
  },
  spotlight(button) {
    const match = matchById(button.dataset.id);
    if (!match || match.played || !match.away) return;
    state.spotlight = match.id;
    if (!clubsReady(match)) {
      openMatchPacks(match.id);
      return;
    }
    refresh();
    window.scrollTo({ top: 0, behavior: state.express ? "auto" : "smooth" });
  },
  unlock(button) {
    const match = matchById(button.dataset.id);
    if (!match) return;
    match.played = false;
    clearGage(match);
    state.spotlight = match.id;
    state.celebrated = false;
    refresh();
  },
  undo() {
    const played = state.matches.filter((match) => match.played).sort((a, b) => b.playedAt - a.playedAt);
    if (!played.length) return;
    played[0].played = false;
    clearGage(played[0]);
    state.spotlight = played[0].id;
    state.celebrated = false;
    toast("Dernier score annulé.");
    refresh();
  },
  async "reset-scores"() {
    const ok = await ask({ title: "Scores à zéro", text: "Les journées restent, les scores repartent de zéro.", confirm: "Remettre à zéro" });
    if (!ok) return;
    state.matches.forEach((match) => {
      match.hs = 0;
      match.as = 0;
      match.played = false;
      match.playedAt = 0;
      match.stakes = [];
      match.restores = [];
      match.choice = null;
      match.homeClub = null;
      match.awayClub = null;
    });
    state.celebrated = false;
    toast("Scores remis à zéro.");
    refresh();
  },
  async "reset-draw"() {
    const ok = await ask({
      title: "Refaire le tirage",
      text: "Équipes, packs et scores seront effacés. Les joueurs et le chapeau restent.",
      confirm: "Refaire",
      danger: true
    });
    if (!ok) return;
    resetDrawData();
    toast("On recommence le tirage.");
    show("setup");
  },
  async "reset-all"() {
    const ok = await ask({
      title: "Nouvelle soirée",
      text: "Tout est effacé : joueurs, tirage et classement.",
      confirm: "Tout effacer",
      danger: true
    });
    if (!ok) return;
    const keep = { mute: state.mute, express: state.express, tv: state.tv };
    state = { ...fresh(), ...keep, view: "setup" };
    $("night").value = state.night;
    $("team-search").value = "";
    toast("Nouvelle soirée.");
    show("setup");
  },
  async "copy-rank"() {
    try {
      await navigator.clipboard.writeText(standingsText());
      toast("Classement copié.");
    } catch {
      toast("Impossible de copier.");
    }
  },
  rules() {
    openModal(`
      <div class="modal-head"><h2>Règles</h2><button type="button" data-action="close-modal" aria-label="Fermer">×</button></div>
      <ol class="rules">
        <li>Équipes tirées à la roue. Ensuite, tout le calendrier s’affiche.</li>
        <li>Au moment de jouer un match, on ouvre deux packs : un club par équipe. Puis on entre le score.</li>
        <li>Victoire 3 pts, nul 1 pt, défi réussi +1.</li>
        <li>Égalité : différence de buts, puis buts marqués.</li>
        <li>Défaite : une seule roue. Le perdant retire l’habit tiré.</li>
        <li>Plus de 3 buts d’écart : le gagnant choisit. Cette roue, ou remettre l’habit du match d’avant.</li>
        <li>Nul : rien à retirer.</li>
        <li>Photo du scoreboard FIFA pour remplir le score.</li>
      </ol>
    `, "Règles");
  },
  "toggle-sound"() {
    state.mute = !state.mute;
    Sfx.enabled = !state.mute;
    save();
    paintChrome();
    if (!state.mute) { Sfx.arm(); Sfx.reveal("rare"); }
  },
  "toggle-express"() {
    state.express = !state.express;
    save();
    paintChrome();
    toast(state.express ? "Express activé" : "Express désactivé");
  },
  "toggle-tv"() {
    state.tv = !state.tv;
    save();
    paintChrome();
    requestAnimationFrame(() => { if (state.view === "draw") mainWheel.fit(); });
  },
  "close-modal": closeModal,
  "close-stake"() { closeModal(); },
  "next-stake"(button) {
    closeModal();
    const id = button.dataset.id;
    setTimeout(() => openStake(id), state.express ? 120 : 400);
  },
  "confirm-yes"() { if (confirmResolve) confirmResolve(true); },
  "confirm-no"() { if (confirmResolve) confirmResolve(false); }
};

function bind() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (button) {
      const fn = actions[button.dataset.action];
      if (fn) fn(button, event);
      return;
    }
    const go = event.target.closest("[data-go]");
    if (!go) return;
    if (go.closest("dialog")) closeModal();
    show(go.dataset.go);
  });
  $("night").addEventListener("input", () => {
    state.night = $("night").value.slice(0, 40);
    save();
  });
  $("player-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); addPlayer(); }
  });
  $("player-list").addEventListener("input", (event) => {
    const item = player(event.target.dataset.player);
    if (!item || locked()) return;
    item.name = event.target.value.slice(0, 18);
    save();
  });
  $("player-list").addEventListener("focusout", (event) => {
    const item = player(event.target.dataset.player);
    if (!item) return;
    if (!item.name.trim()) {
      item.name = "Joueur";
      event.target.value = item.name;
      save();
    }
  });
  $("team-search").addEventListener("input", paintTeams);
  $("score-photo").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) scanScoreFromBlob(file);
  });
  document.addEventListener("paste", (event) => {
    if (state.view !== "matches") return;
    const item = [...(event.clipboardData?.items || [])].find((entry) => entry.type.startsWith("image/"));
    if (!item) return;
    const file = item.getAsFile();
    if (file) scanScoreFromBlob(file);
  });
  $("modal").addEventListener("click", (event) => {
    if (event.target === $("modal")) closeModal();
  });
  $("modal").addEventListener("close", modalClosed);
  window.addEventListener("resize", () => {
    if (state.view === "draw") mainWheel.fit();
  });
  document.addEventListener("pointerdown", () => Sfx.arm(), { passive: true });
}

function init() {
  const ids = TEAMS.map((team) => team.id);
  if (new Set(ids).size !== ids.length) console.error("Identifiants d’équipes en double");
  state = load();
  sanitize();
  if (!localStorage.getItem(STORE_KEY) && window.matchMedia("(prefers-reduced-motion: reduce)").matches) state.express = true;
  Sfx.enabled = !state.mute;
  $("night").value = state.night;
  mainWheel.mount($("wheel"));
  bind();
  if (phase() === "ready" && !state.matches.length) buildTournament();
  else show(state.view || "setup");
}

document.addEventListener("DOMContentLoaded", init);
