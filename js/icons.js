// ─── SCHOLA ICON SYSTEM ─────────────────────
// All icons as SVG functions. Size and color controlled by CSS.

const Icon = {
  _svg: (path, opts = {}) => {
    const size = opts.size || 24;
    const stroke = opts.stroke || 'currentColor';
    const sw = opts.sw || 2;
    const fill = opts.fill || 'none';
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" 
      fill="${fill}" stroke="${stroke}" stroke-width="${sw}" 
      stroke-linecap="round" stroke-linejoin="round"
      style="flex-shrink:0;display:block;">${path}</svg>`;
  },

  home: (o) => Icon._svg(
    `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
     <polyline points="9 22 9 12 15 12 15 22"/>`, o),

  homeFilled: (o) => Icon._svg(
    `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="currentColor"/>
     <polyline points="9 22 9 12 15 12 15 22" stroke="white" fill="none"/>`, o),

  graduationCap: (o) => Icon._svg(
    `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
     <path d="M6 12v5c3 3 9 3 12 0v-5"/>`, o),

  brain: (o) => Icon._svg(
    `<path d="M9.5 2A2.5 2.5 0 007 4.5V5a2 2 0 00-2 2v1a2 2 0 002 2h.5"/>
     <path d="M14.5 2A2.5 2.5 0 0117 4.5V5a2 2 0 012 2v1a2 2 0 01-2 2h-.5"/>
     <path d="M9 13a3 3 0 006 0v-3H9v3z"/>
     <path d="M9.5 10V7a2.5 2.5 0 015 0v3"/>
     <path d="M9 13v5M15 13v5M7 18h10"/>`, o),

  zap: (o) => Icon._svg(
    `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none"/>`, o),

  creditCard: (o) => Icon._svg(
    `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
     <line x1="1" y1="10" x2="23" y2="10"/>`, o),

  person: (o) => Icon._svg(
    `<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
     <circle cx="12" cy="7" r="4"/>`, o),

  personFilled: (o) => Icon._svg(
    `<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" fill="currentColor"/>
     <circle cx="12" cy="7" r="4" fill="currentColor"/>`, o),

  bell: (o) => Icon._svg(
    `<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
     <path d="M13.73 21a2 2 0 01-3.46 0"/>`, o),

  bellFilled: (o) => Icon._svg(
    `<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" stroke="none"/>
     <path d="M13.73 21a2 2 0 01-3.46 0"/>`, o),

  chevronLeft: (o) => Icon._svg(
    `<polyline points="15 18 9 12 15 6"/>`, o),

  chevronRight: (o) => Icon._svg(
    `<polyline points="9 18 15 12 9 6"/>`, o),

  eye: (o) => Icon._svg(
    `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
     <circle cx="12" cy="12" r="3"/>`, o),

  eyeOff: (o) => Icon._svg(
    `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
     <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
     <line x1="1" y1="1" x2="23" y2="23"/>`, o),

  lock: (o) => Icon._svg(
    `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
     <path d="M7 11V7a5 5 0 0110 0v4"/>`, o),

  mail: (o) => Icon._svg(
    `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
     <polyline points="22,6 12,13 2,6"/>`, o),

  idCard: (o) => Icon._svg(
    `<rect x="2" y="5" width="20" height="14" rx="2"/>
     <circle cx="8" cy="12" r="2"/>
     <path d="M14 10h4M14 14h2"/>`, o),

  building: (o) => Icon._svg(
    `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
     <polyline points="9 22 9 12 15 12 15 22"/>`, o),

  trendingUp: (o) => Icon._svg(
    `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
     <polyline points="17 6 23 6 23 12"/>`, o),

  send: (o) => Icon._svg(
    `<line x1="22" y1="2" x2="11" y2="13"/>
     <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" stroke="none"/>`, o),

  paperclip: (o) => Icon._svg(
    `<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>`, o),

  check: (o) => Icon._svg(
    `<polyline points="20 6 9 17 4 12"/>`, o),

  checkCircle: (o) => Icon._svg(
    `<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
     <polyline points="22 4 12 14.01 9 11.01"/>`, o),

  alertTriangle: (o) => Icon._svg(
    `<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
     <line x1="12" y1="9" x2="12" y2="13"/>
     <line x1="12" y1="17" x2="12.01" y2="17"/>`, o),

  info: (o) => Icon._svg(
    `<circle cx="12" cy="12" r="10"/>
     <line x1="12" y1="8" x2="12" y2="12"/>
     <line x1="12" y1="16" x2="12.01" y2="16"/>`, o),

  settings: (o) => Icon._svg(
    `<circle cx="12" cy="12" r="3"/>
     <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>`, o),

  logOut: (o) => Icon._svg(
    `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
     <polyline points="16 17 21 12 16 7"/>
     <line x1="21" y1="12" x2="9" y2="12"/>`, o),

  clock: (o) => Icon._svg(
    `<circle cx="12" cy="12" r="10"/>
     <polyline points="12 6 12 12 16 14"/>`, o),

  helpCircle: (o) => Icon._svg(
    `<circle cx="12" cy="12" r="10"/>
     <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
     <line x1="12" y1="17" x2="12.01" y2="17"/>`, o),

  star: (o) => Icon._svg(
    `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/>`, o),

  flame: (o) => Icon._svg(
    `<path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7c-1.93 0-3.68-.79-4.95-2.05" fill="currentColor" stroke="none"/>
     <path d="M12 14c0 1.1-.9 2-2 2"/>`, o),

  trophy: (o) => Icon._svg(
    `<polyline points="8 21 12 17 16 21"/>
     <path d="M7 4h10v7a5 5 0 01-10 0V4z"/>
     <path d="M7 8H3v3a4 4 0 004 4"/>
     <path d="M17 8h4v3a4 4 0 01-4 4"/>
     <line x1="12" y1="17" x2="12" y2="21"/>`, o),

  shield: (o) => Icon._svg(
    `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, o),

  shieldCheck: (o) => Icon._svg(
    `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" stroke="none" opacity="0.2"/>
     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
     <polyline points="9 12 11 14 15 10"/>`, o),

  upload: (o) => Icon._svg(
    `<polyline points="16 16 12 12 8 16"/>
     <line x1="12" y1="12" x2="12" y2="21"/>
     <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>`, o),

  download: (o) => Icon._svg(
    `<polyline points="8 17 12 21 16 17"/>
     <line x1="12" y1="12" x2="12" y2="21"/>
     <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>`, o),

  share: (o) => Icon._svg(
    `<circle cx="18" cy="5" r="3"/>
     <circle cx="6" cy="12" r="3"/>
     <circle cx="18" cy="19" r="3"/>
     <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
     <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>`, o),

  plus: (o) => Icon._svg(
    `<line x1="12" y1="5" x2="12" y2="19"/>
     <line x1="5" y1="12" x2="19" y2="12"/>`, o),

  x: (o) => Icon._svg(
    `<line x1="18" y1="6" x2="6" y2="18"/>
     <line x1="6" y1="6" x2="18" y2="18"/>`, o),

  moreVertical: (o) => Icon._svg(
    `<circle cx="12" cy="5" r="1" fill="currentColor"/>
     <circle cx="12" cy="12" r="1" fill="currentColor"/>
     <circle cx="12" cy="19" r="1" fill="currentColor"/>`, o),

  bookOpen: (o) => Icon._svg(
    `<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
     <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>`, o),

  camera: (o) => Icon._svg(
    `<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
     <circle cx="12" cy="13" r="4"/>`, o),

  refresh: (o) => Icon._svg(
    `<polyline points="23 4 23 10 17 10"/>
     <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>`, o),

  arrowRight: (o) => Icon._svg(
    `<line x1="5" y1="12" x2="19" y2="12"/>
     <polyline points="12 5 19 12 12 19"/>`, o),

  whatsapp: (o) => Icon._svg(
    `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" stroke="none"/>
     <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.845L0 24l6.335-1.508A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.502-5.17-1.38l-.37-.22-3.76.895.953-3.668-.242-.382A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>`, o),

  // Render icon into element
  render(name, selector, opts = {}) {
    const el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
    if (el && Icon[name]) el.innerHTML = Icon[name](opts);
  },

  // Replace all [data-icon] elements
  init() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const name = el.dataset.icon;
      const size = parseInt(el.dataset.size) || 24;
      const color = el.dataset.color || 'currentColor';
      if (Icon[name]) el.innerHTML = Icon[name]({ size, stroke: color });
    });
  }
};