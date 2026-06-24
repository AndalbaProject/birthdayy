/* ============================================================
   for you ♡ • interaksi
   Atur semua isi di CONFIG ini lalu simpan.
   ============================================================ */
const CONFIG = {
  age: 20,
  // password = tanggal lahir, 6 digit (mis. 27 Januari 2007 -> "270107")
  password: "050426",

  // playlist
  playlistName: "for u",
  playlistBy: "Lovee",
  songs: [
    { song: "Abadi", artist: "Perunggu", time: "03:52" },
  ],

  // surat (akan diketik perlahan)
  letter:
`i love you today,tomorrow and forever,terimakasih telah hadir dihidupku dari banyak nya orang orang'yang datang dikehidupan ku,terimakasih karna kamu sudah menjadi yang terbaik diantara mereka,terimakasih atas kesabaran mu yang telah kamu berikan kepada ku,aku paham bahwa hidup hanya tentang rasa bersyukur dan cukup,kita akan kehilangan seseorang yang selalu ada tanpa salah paham,kadang kita saling melukai tanpa sadar,tapi percayalah semua hubungan pasti ada badai nya,intinya cuma satu lewati bareng'badainya dan jangan ganti orang nya 🤍✨`,
};

/* ---------- apply config ---------- */
document.getElementById("ageText").textContent = CONFIG.age;
document.getElementById("plName").textContent = CONFIG.playlistName;
document.getElementById("plBy").textContent = CONFIG.playlistBy;

/* ============================================================
   CUTE CAT BUILDER — wajah berganti ekspresi dengan cepat
   ============================================================ */
const CAT_BODY = `
  <path class="tail" d="M165 138 C196 138 198 96 180 88 C171 84 166 94 173 100 C184 108 180 128 158 130 Z"
        fill="#ffccd5" stroke="#4e2a36" stroke-width="3" stroke-linejoin="round"/>
  <ellipse class="paw pawL" cx="80" cy="165" rx="14" ry="9" fill="#ffccd5" stroke="#4e2a36" stroke-width="3"/>
  <ellipse class="paw pawR" cx="120" cy="165" rx="14" ry="9" fill="#ffccd5" stroke="#4e2a36" stroke-width="3"/>
  <g class="cat-body" fill="#ffccd5" stroke="#4e2a36" stroke-width="3" stroke-linejoin="round">
    <path d="M52 58 L42 14 L90 42 Z"/>
    <path d="M148 58 L158 14 L110 42 Z"/>
    <path d="M100 38 C154 38 174 80 174 112 C174 150 144 166 100 166 C56 166 26 150 26 112 C26 80 46 38 100 38 Z"/>
  </g>
  <path d="M55 52 L49 26 L78 44 Z" fill="#ffe5ec"/>
  <path d="M145 52 L151 26 L122 44 Z" fill="#ffe5ec"/>
  <g class="whiskers" stroke="#4e2a36" stroke-width="2" stroke-linecap="round" opacity="0.75">
    <path d="M36 100 h28"/><path d="M34 110 h30"/>
    <path d="M164 100 h-28"/><path d="M166 110 h-30"/>
  </g>`;

const BLUSH = `
  <ellipse cx="62" cy="114" rx="11" ry="6" fill="#f7b7c8" opacity="0.85"/>
  <ellipse cx="138" cy="114" rx="11" ry="6" fill="#f7b7c8" opacity="0.85"/>`;
const BLUSH_BIG = `
  <ellipse cx="60" cy="118" rx="13" ry="7" fill="#f7b7c8" opacity="0.95"/>
  <ellipse cx="140" cy="118" rx="13" ry="7" fill="#f7b7c8" opacity="0.95"/>`;

const STROKE = `fill="none" stroke="#4e2a36" stroke-width="3" stroke-linecap="round"`;

/* tiap mood = daftar ekspresi (wajah) yang akan diputar bergantian cepat */
const EXPRESSIONS = {
  happy: [
    // mata bulat + mulut nganga senyum
    `<ellipse cx="78" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="122" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <path d="M86 106 Q100 128 114 106 Q100 114 86 106 Z" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    // mata happy ^ ^ + senyum
    `<path d="M70 99 q8 -11 16 0" ${STROKE}/><path d="M114 99 q8 -11 16 0" ${STROKE}/>
     <path d="M88 108 Q100 122 112 108" ${STROKE}/>`,
    // mata kedip (garis) + mulut o
    `<path d="M72 97 h14" ${STROKE}/><path d="M114 97 h14" ${STROKE}/>
     <ellipse cx="100" cy="114" rx="7" ry="8" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    // mata berbinar :D
    `<circle cx="78" cy="96" r="7" fill="#4e2a36"/><circle cx="80" cy="93" r="2.4" fill="#fff"/>
     <circle cx="122" cy="96" r="7" fill="#4e2a36"/><circle cx="124" cy="93" r="2.4" fill="#fff"/>
     <path d="M84 108 Q100 130 116 108 Q100 116 84 108 Z" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
  ],
  normal: [
    `<ellipse cx="78" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="122" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <path d="M86 106 Q100 128 114 106 Q100 114 86 106 Z" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    `<ellipse cx="78" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="122" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <path d="M88 110 Q100 120 112 110" ${STROKE}/>`,
    `<path d="M72 97 h14" ${STROKE}/><path d="M114 97 h14" ${STROKE}/>
     <path d="M88 110 Q100 120 112 110" ${STROKE}/>`,
    `<path d="M70 99 q8 -11 16 0" ${STROKE}/><path d="M114 99 q8 -11 16 0" ${STROKE}/>
     <path d="M88 108 Q100 124 112 108" ${STROKE}/>`,
  ],
  curious: [
    `<ellipse cx="78" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="122" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <ellipse cx="100" cy="114" rx="6" ry="7" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    `<ellipse cx="82" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="126" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <ellipse cx="104" cy="114" rx="5" ry="6" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    `<path d="M72 97 h14" ${STROKE}/><path d="M114 97 h14" ${STROKE}/>
     <ellipse cx="100" cy="114" rx="6" ry="6" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    `<ellipse cx="74" cy="96" rx="6" ry="7" fill="#4e2a36"/><ellipse cx="118" cy="96" rx="6" ry="7" fill="#4e2a36"/>
     <ellipse cx="96" cy="114" rx="6" ry="7" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
  ],
  angry: [
    `<path d="M68 88 l18 8 m-18 0 l18 -8" ${STROKE}/><path d="M132 88 l-18 8 m18 0 l-18 -8" ${STROKE}/>
     <path d="M86 122 Q100 110 114 122" ${STROKE}/>`,
    `<path d="M68 90 l18 6 m-18 2 l18 -8" ${STROKE}/><path d="M132 90 l-18 6 m18 2 l-18 -8" ${STROKE}/>
     <ellipse cx="100" cy="120" rx="7" ry="6" fill="#ef6f8e" stroke="#4e2a36" stroke-width="2"/>`,
    `<path d="M68 86 l18 10 m-18 2 l18 -10" ${STROKE}/><path d="M132 86 l-18 10 m18 2 l-18 -10" ${STROKE}/>
     <path d="M84 124 Q100 108 116 124" ${STROKE}/>`,
    `<path d="M70 92 h16" ${STROKE}/><path d="M114 92 h16" ${STROKE}/>
     <path d="M86 122 Q100 112 114 122" ${STROKE}/>`,
  ],
};

function buildCat(mood) {
  const list = EXPRESSIONS[mood] || EXPRESSIONS.normal;
  const arms = mood === "arms"
    ? `<g stroke="#4e2a36" stroke-width="3" stroke-linecap="round" fill="none">
         <path class="arm armL" d="M52 70 C30 52 26 30 30 22"/>
         <path class="arm armR" d="M148 70 C170 52 174 30 170 22"/>
       </g>` : "";
  const faceMood = mood === "arms" ? "happy" : mood;
  const faces = (EXPRESSIONS[faceMood] || list)
    .map((f) => `<g class="face">${f}</g>`)
    .join("");
  const blush = (faceMood === "angry") ? BLUSH_BIG : BLUSH;
  return `<svg class="cat" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${arms}${CAT_BODY}${blush}
    <g class="faces">${faces}</g>
  </svg>`;
}

document.querySelectorAll(".cat-wrap[data-cat]").forEach((wrap) => {
  wrap.insertAdjacentHTML("afterbegin", buildCat(wrap.dataset.cat));
});

/* tap kucing -> mantul lalu lanjut melompat lagi */
document.addEventListener("click", (e) => {
  const cat = e.target.closest(".cat");
  if (!cat) return;
  cat.classList.remove("boing");
  void cat.offsetWidth;
  cat.classList.add("boing");
  spawnHearts(6);
  setTimeout(() => cat.classList.remove("boing"), 560);
});


const songList = document.getElementById("songList");
CONFIG.songs.forEach((s, i) => {
  const li = document.createElement("li");
  li.innerHTML =
    `<span class="sp-num">${i + 1}</span>` +
    `<span><span class="sp-song">${s.song}</span><br/><span class="sp-artist">${s.artist}</span></span>` +
    `<span class="sp-time">${s.time}</span>`;
  songList.appendChild(li);
});

/* ---------- screen navigation ---------- */
const screens = document.querySelectorAll(".screen");
let letterTyped = false;

function showScreen(id) {
  screens.forEach((s) => {
    s.classList.toggle("active", s.dataset.screen === id);
  });
  spawnHearts(8);

  if (id === "song") tryPlayMusic();
  if (id === "letter") typeLetter();
  if (id === "gate") resetPin();
}

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.go));
});

/* ---------- password keypad ---------- */
const pinDots = document.getElementById("pinDots");
const keypad = document.getElementById("keypad");
let pin = "";

function renderPin() {
  pinDots.querySelectorAll("span").forEach((d, i) => {
    d.classList.toggle("filled", i < pin.length);
  });
}
function resetPin() {
  pin = "";
  renderPin();
}

keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const key = btn.dataset.key;

  if (key === "del") {
    pin = pin.slice(0, -1);
  } else if (pin.length < 6) {
    pin += key;
  }
  renderPin();

  if (pin.length === 6) {
    setTimeout(checkPin, 180);
  }
});

function checkPin() {
  if (pin === CONFIG.password) {
    spawnHearts(20);
    showScreen("intro");
  } else {
    pinDots.classList.add("shake");
    setTimeout(() => {
      pinDots.classList.remove("shake");
      resetPin();
    }, 500);
  }
}

/* ---------- "noo" button runs away ---------- */
const nooBtn = document.getElementById("nooBtn");
let dodges = 0;
function dodge() {
  dodges++;
  const dx = (Math.random() - 0.5) * 180;
  const dy = (Math.random() - 0.5) * 120;
  nooBtn.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 12}deg)`;
}
nooBtn.addEventListener("mouseenter", dodge);
nooBtn.addEventListener("touchstart", (e) => {
  // di mobile: 2x sentuh pertama kabur, lalu baru ke layar marah
  if (dodges < 2) { e.preventDefault(); dodge(); }
});

/* ---------- typing letter ---------- */
const letterEl = document.getElementById("letterText");
function typeLetter() {
  if (letterTyped) return;
  letterTyped = true;
  const text = CONFIG.letter;
  letterEl.textContent = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  letterEl.after(cursor);

  let i = 0;
  (function step() {
    if (i <= text.length) {
      letterEl.textContent = text.slice(0, i);
      i++;
      setTimeout(step, 28);
    } else {
      cursor.remove();
      spawnHearts(24);
    }
  })();
}

/* ---------- background music ---------- */
const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");

function tryPlayMusic() {
  bgm.volume = 0.5;
  bgm.play()
    .then(() => musicToggle.classList.add("playing"))
    .catch(() => {});
}
musicToggle.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play().then(() => musicToggle.classList.add("playing")).catch(() => {});
  } else {
    bgm.pause();
    musicToggle.classList.remove("playing");
  }
});

/* ---------- mulai musik dari awal ---------- */
let musicStarted = false;
function startMusicOnce() {
  if (musicStarted) return;
  musicStarted = true;
  tryPlayMusic();
}
/* coba langsung saat halaman dibuka (mungkin diblok browser) */
window.addEventListener("load", () => {
  bgm.volume = 0.5;
  bgm.play().then(() => { musicStarted = true; musicToggle.classList.add("playing"); }).catch(() => {});
});
/* kalau diblok, mulai pada interaksi pertama */
["pointerdown", "touchstart", "keydown", "click"].forEach((ev) =>
  document.addEventListener(ev, startMusicOnce, { passive: true })
);

/* ---------- floating hearts ---------- */
const heartsBg = document.getElementById("heartsBg");
const HEART_EMOJI = ["💖", "💗", "🤍", "🌸", "⭐"];

function spawnHearts(count) {
  for (let n = 0; n < count; n++) {
    const h = document.createElement("span");
    h.className = "fh";
    h.textContent = HEART_EMOJI[(Math.random() * HEART_EMOJI.length) | 0];
    h.style.left = Math.random() * 100 + "%";
    h.style.bottom = "-30px";
    h.style.fontSize = 16 + Math.random() * 18 + "px";
    h.style.animationDuration = 4 + Math.random() * 4 + "s";
    heartsBg.appendChild(h);
    setTimeout(() => h.remove(), 8500);
  }
}

/* ambient hearts */
setInterval(() => spawnHearts(2), 2200);
spawnHearts(6);
