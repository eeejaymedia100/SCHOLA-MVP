// ─── SCHOLA ANIMATION SYSTEM ─────────────────
// Requires GSAP loaded before this file

// ── PAGE ENTRANCE ─────────────────────────────
const PageAnim = {

  // Stagger animate elements into view
  enter(selector = '[data-anim]', stagger = 0.08) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    gsap.fromTo(els,
      { opacity: 0, y: 28, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.55,
        stagger,
        ease: 'power3.out',
        clearProps: 'transform'
      }
    );
  },

  // Slide up (for sheets, modals)
  slideUp(el, onComplete) {
    gsap.fromTo(el,
      { y: '100%', opacity: 0 },
      {
        y: '0%', opacity: 1, duration: 0.5,
        ease: 'back.out(1.4)',
        onComplete
      }
    );
  },

  // Page exit before navigation
  exit(onComplete) {
    gsap.to(document.body, {
      opacity: 0, y: -12, duration: 0.2,
      ease: 'power2.in',
      onComplete
    });
  },

  // Fade in single element
  fadeIn(el, delay = 0) {
    gsap.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, delay, ease: 'power2.out' }
    );
  },

  // Animate number counter (e.g. ₦45,000 counting up)
  counter(el, endValue, prefix = '', suffix = '', duration = 1.2) {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: endValue,
      duration,
      ease: 'power2.out',
      onUpdate() {
        el.textContent = prefix +
          Math.round(obj.val).toLocaleString('en-NG') + suffix;
      }
    });
  },

  // SVG progress ring draw
  drawRing(ringEl, percent, duration = 1.2) {
    const circle = ringEl.querySelector('circle:last-child');
    if (!circle) return;
    const r      = parseFloat(circle.getAttribute('r'));
    const circ   = 2 * Math.PI * r;
    const target = circ - (percent / 100) * circ;
    circle.style.strokeDasharray  = circ;
    circle.style.strokeDashoffset = circ;
    gsap.to(circle, {
      strokeDashoffset: target,
      duration,
      ease: 'power3.out'
    });
  },

  // Scroll-triggered card animations
  initScrollAnim() {
    if (typeof ScrollTrigger === 'undefined') return;
    gsap.utils.toArray('[data-scroll]').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.55, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        }
      );
    });
  },

  // Stagger a list of items appearing one by one
  staggerList(items, stagger = 0.06) {
    gsap.fromTo(items,
      { opacity: 0, x: -16 },
      {
        opacity: 1, x: 0,
        duration: 0.4,
        stagger,
        ease: 'power2.out'
      }
    );
  }
};

// ── MICRO-INTERACTIONS ────────────────────────
const Micro = {

  // Press animation for buttons and cards
  press(el) {
    gsap.timeline()
      .to(el, { scale: 0.94, duration: 0.1, ease: 'power2.in' })
      .to(el, { scale: 1, duration: 0.4, ease: 'back.out(3)' });
  },

  // Ripple effect on interactive elements
  ripple(e, color = 'rgba(255,255,255,0.25)') {
    const el       = e.currentTarget;
    const rect     = el.getBoundingClientRect();
    const size     = Math.max(rect.width, rect.height) * 2;
    const ripple   = document.createElement('span');
    const x        = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
    const y        = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2;

    Object.assign(ripple.style, {
      position: 'absolute', borderRadius: '50%',
      width: size + 'px', height: size + 'px',
      left: x + 'px', top: y + 'px',
      background: color, pointerEvents: 'none',
      transform: 'scale(0)', opacity: '1'
    });

    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(ripple);

    gsap.to(ripple, {
      scale: 1, opacity: 0, duration: 0.6,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    });
  },

  // Shake animation (for errors)
  shake(el) {
    gsap.timeline()
      .to(el, { x: -8, duration: 0.06 })
      .to(el, { x: 8, duration: 0.06 })
      .to(el, { x: -6, duration: 0.06 })
      .to(el, { x: 6, duration: 0.06 })
      .to(el, { x: 0, duration: 0.06 });
  },

  // Pulse (for streaks, badges)
  pulse(el, scale = 1.08) {
    gsap.to(el, {
      scale,
      duration: 0.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });
  },

  // Success bounce
  successBounce(el) {
    gsap.timeline()
      .fromTo(el,
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
      )
      .to(el, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
  },

  // Haptic feedback (Android Chrome)
  haptic(pattern = [10]) {
    if (navigator.vibrate) navigator.vibrate(pattern);
  },

  // Initialize ripple and press on all interactive elements
  initAll() {
    const selectors = '.btn, .card-tap, .nav-item, .quick-action, .fee-card, .menu-item';
    document.querySelectorAll(selectors).forEach(el => {
      el.addEventListener('pointerdown', (e) => {
        Micro.ripple(e);
        Micro.haptic([8]);
      });
    });
  }
};

// ── CONFETTI ──────────────────────────────────
const Celebrate = {
  // Payment success confetti
  confetti(duration = 3000) {
    if (typeof confetti === 'undefined') return;
    const end = Date.now() + duration;
    const colors = ['#4F46E5', '#818cf8', '#059669', '#fff', '#fbbf24'];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  },

  // Single burst from center
  burst() {
    if (typeof confetti === 'undefined') return;
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4F46E5', '#818cf8', '#059669', '#fbbf24', '#fff']
    });
  }
};

// ── BOTTOM NAV ANIMATED INDICATOR ─────────────
const NavIndicator = {
  init(activeId) {
    const nav   = document.querySelector('.bottom-nav');
    if (!nav) return;
    const items = nav.querySelectorAll('.nav-item');
    
    // Create sliding pill indicator
    const pill = document.createElement('div');
    pill.className = 'nav-pill';
    Object.assign(pill.style, {
      position: 'absolute', height: '52px',
      background: 'rgba(79,70,229,0.15)',
      borderRadius: '14px',
      pointerEvents: 'none',
      zIndex: '0',
      transition: 'none'
    });
    nav.style.position = 'relative';
    nav.insertBefore(pill, nav.firstChild);

    const moveToActive = (activeEl, animate = true) => {
      const navRect    = nav.getBoundingClientRect();
      const itemRect   = activeEl.getBoundingClientRect();
      const targetX    = itemRect.left - navRect.left - 4;
      const targetW    = itemRect.width + 8;

      if (animate) {
        gsap.to(pill, {
          x: targetX, width: targetW,
          duration: 0.4,
          ease: 'power3.out'
        });
      } else {
        gsap.set(pill, { x: targetX, width: targetW });
      }
    };

    // Set initial position
    const initial = nav.querySelector('.nav-item.active');
    if (initial) moveToActive(initial, false);

    // Animate on click
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        moveToActive(item);
      });
    });
  }
};

// ── LOADING BAR (NProgress style) ─────────────
const LoadBar = {
  el: null,
  init() {
    this.el = document.createElement('div');
    Object.assign(this.el.style, {
      position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
      background: 'linear-gradient(90deg, #4F46E5, #818cf8)',
      zIndex: 99999, transformOrigin: 'left center',
      scaleX: 0, display: 'block', opacity: 0
    });
    document.body.appendChild(this.el);
  },
  start() {
    if (!this.el) this.init();
    gsap.set(this.el, { scaleX: 0, opacity: 1 });
    gsap.to(this.el, { scaleX: 0.8, duration: 1.5, ease: 'power1.out' });
  },
  done() {
    gsap.timeline()
      .to(this.el, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
      .to(this.el, { opacity: 0, duration: 0.3 });
  }
};

// ── SKELETON LOADER ───────────────────────────
const Skeleton = {
  // Replace element with shimmer skeleton
  show(container, count = 3, height = 80) {
    container.innerHTML = Array(count).fill(`
      <div class="skeleton-item" style="
        height:${height}px; border-radius:16px;
        background:linear-gradient(90deg,#E2E8F0 25%,#F8FAFC 50%,#E2E8F0 75%);
        background-size:200% 100%;
        animation:shimmer 1.5s infinite;
        margin-bottom:10px;
      "></div>
    `).join('');
  },
  hide(container) {
    container.querySelectorAll('.skeleton-item').forEach(el => {
      gsap.to(el, { opacity: 0, duration: 0.3, onComplete: () => el.remove() });
    });
  }
};

// ── SMOOTH PAGE NAVIGATION ────────────────────
function goTo(page, delay = 200) {
  LoadBar.start();
  gsap.to(document.body, {
    opacity: 0,
    y: -16,
    duration: 0.22,
    ease: 'power2.in',
    onComplete: () => { window.location.href = page; }
  });
}

// ── TYPED TEXT (for AI responses) ─────────────
function typeText(el, text, speed = 18, onDone) {
  el.textContent = '';
  let i = 0;
  // Split into words for natural feel
  const words = text.split(' ');
  const interval = setInterval(() => {
    if (i >= words.length) {
      clearInterval(interval);
      if (onDone) onDone();
      return;
    }
    el.textContent += (i > 0 ? ' ' : '') + words[i];
    el.parentElement.scrollTop = el.parentElement.scrollHeight;
    i++;
  }, speed);
  return interval;
}

// ── AUTO INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Fade in page on arrival
  gsap.fromTo(document.body,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: 'power2.out' }
  );
  LoadBar.done();

  // Initialize micro-interactions
  Micro.initAll();

  // Initialize icons
  if (typeof Icon !== 'undefined') Icon.init();
});