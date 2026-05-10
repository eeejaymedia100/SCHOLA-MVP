// ─── SCHOLA UTILITIES ───────────────────────

// ── SESSION (local storage) ──────────────────
const Session = {
  set(user) {
    localStorage.setItem('schola_user', JSON.stringify(user));
  },

  get() {
    try {
      return JSON.parse(localStorage.getItem('schola_user'));
    } catch {
      return null;
    }
  },

  clear() {
    localStorage.removeItem('schola_user');
  },

  require(redirect = 'auth.html') {
    if (!this.get()) window.location.href = redirect;
    return this.get();
  }
};

// ── PAGE NAVIGATION ───────────────────────────
function goTo(page, delay = 160) {
  document.body.style.opacity = '0';
  document.body.style.transform = 'scale(0.98)';
  document.body.style.transition = 'all 0.18s ease';

  setTimeout(() => {
    window.location.href = page;
  }, delay);
}

// ── TOAST NOTIFICATIONS ───────────────────────
function toast(msg, type = 'default', duration = 3000) {
  let el = document.getElementById('toast');

  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }

  el.textContent = msg;
  el.className = `show ${type}`;

  clearTimeout(el._t);

  el._t = setTimeout(() => {
    el.classList.remove('show');
  }, duration);
}

// ── BOTTOM SHEET ─────────────────────────────
function openSheet(id) {
  document.getElementById(id + '-overlay').classList.add('open');
  document.getElementById(id + '-sheet').classList.add('open');
}

function closeSheet(id) {
  document.getElementById(id + '-overlay').classList.remove('open');
  document.getElementById(id + '-sheet').classList.remove('open');
}

// ── FORMAT CURRENCY ───────────────────────────
function naira(amount) {
  return '₦' + Number(amount).toLocaleString('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// ── FORMAT DATE ───────────────────────────────
function fmtDate(ts) {
  if (!ts) return '';

  const d = ts.seconds
    ? new Date(ts.seconds * 1000)
    : new Date(ts);

  return d.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// ── GREETING ─────────────────────────────────
function greeting() {
  const h = new Date().getHours();

  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';

  return 'Good evening';
}

// ── UPGRADED BOTTOM NAV ───────────────────────
function renderNav(active) {
  const items = [
    {
      id: 'home',
      href: 'home.html',
      label: 'Home',
      icon: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      `,
      iconActive: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="currentColor" stroke="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2 2z"/>
          <polyline points="9 22 9 12 15 12 15 22"
            fill="none" stroke="white" stroke-width="1.5"/>
        </svg>
      `
    },

    {
      id: 'study',
      href: 'study.html',
      label: 'Study',
      icon: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      `,
      iconActive: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="currentColor" stroke="none">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      `
    },

    {
      id: 'pay',
      href: 'pay.html',
      label: 'Pay',
      icon: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round">
          <rect x="1" y="4" width="22" height="16" rx="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      `,
      iconActive: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round">
          <rect x="1" y="4" width="22" height="16" rx="2"
            fill="currentColor" stroke="none"/>
          <line x1="1" y1="10" x2="23" y2="10"
            stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
        </svg>
      `
    },

    {
      id: 'profile',
      href: 'profile.html',
      label: 'Profile',
      icon: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      `,
      iconActive: `
        <svg width="22" height="22" viewBox="0 0 24 24"
          fill="currentColor" stroke="none">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      `
    }
  ];

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';

  nav.innerHTML = items.map(item => `
    <a href="${item.href}"
      class="nav-item ${item.id === active ? 'active' : ''}"
      onclick="window.Micro && Micro.haptic([8])">

      <div class="icon-wrap">
        ${item.id === active ? item.iconActive : item.icon}
      </div>

      <span>${item.label}</span>
    </a>
  `).join('');

  document.body.appendChild(nav);

  // Initialize animated indicator after nav is in DOM
  if (typeof NavIndicator !== 'undefined') {
    requestAnimationFrame(() => NavIndicator.init(active));
  }
}

// ── GEMINI AI CALL ────────────────────────────
async function askGemini(prompt, systemPrompt = '') {
  const contents = [];

  if (systemPrompt) {
    contents.push({
      role: 'user',
      parts: [{ text: systemPrompt }]
    });

    contents.push({
      role: 'model',
      parts: [{ text: 'Understood. I am ready.' }]
    });
  }

  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  const res = await fetch(
    `${SCHOLA_CONFIG.geminiUrl}?key=${SCHOLA_CONFIG.geminiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        contents,

        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024
        }
      })
    }
  );

  if (!res.ok) {
    throw new Error('AI service unavailable');
  }

  const data = await res.json();

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    'No response'
  );
}

// ── SVG PROGRESS RING ─────────────────────────
function progressRing(
  percent,
  size = 120,
  stroke = 10,
  color = '#4F46E5'
) {
  const r = (size / 2) - (stroke / 2);
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return `
    <svg width="${size}" height="${size}"
      viewBox="0 0 ${size} ${size}">

      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${r}"
        fill="none"
        stroke="#E2E8F0"
        stroke-width="${stroke}"
      />

      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${r}"
        fill="none"
        stroke="${color}"
        stroke-width="${stroke}"
        stroke-dasharray="${circ}"
        stroke-dashoffset="${offset}"
        stroke-linecap="round"
        transform="rotate(-90 ${size / 2} ${size / 2})"
        style="transition: stroke-dashoffset 0.8s ease"
      />
    </svg>
  `;
}

// ── PAYSTACK PAYMENT ──────────────────────────
function payWithPaystack({
  email,
  amount,
  name,
  meta,
  onSuccess,
  onClose
}) {
  const handler = PaystackPop.setup({
    key: SCHOLA_CONFIG.paystackKey,
    email,

    amount: Math.round(amount * 100),

    currency: 'NGN',

    ref:
      'SCH_' +
      Date.now() +
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 6)
        .toUpperCase(),

    metadata: {
      custom_fields: [
        {
          display_name: 'Student',
          variable_name: 'student',
          value: name
        },

        ...meta
      ]
    },

    callback: (res) => onSuccess(res),

    onClose: () => onClose && onClose()
  });

  handler.openIframe();
}

// ── AI MESSAGE COUNT ──────────────────────────
const AiQuota = {
  key: 'schola_ai_count',

  get() {
    return parseInt(
      localStorage.getItem(this.key) || '0'
    );
  },

  inc() {
    localStorage.setItem(
      this.key,
      this.get() + 1
    );
  },

  reset() {
    localStorage.setItem(this.key, '0');
  },

  over() {
    const user = Session.get();

    if (user?.plan === 'pro') return false;

    return this.get() >= SCHOLA_CONFIG.freeAiMessages;
  }
};
