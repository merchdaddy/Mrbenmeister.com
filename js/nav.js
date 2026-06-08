/* ═══════════════════════════════════════════════
   GOLD LABEL CLUB — NAVIGATION COMPONENTS
   Public nav + Portal sidebar
   ═══════════════════════════════════════════════ */

/* ── PUBLIC NAV ───────────────────────────────── */
function renderPublicNav(activePage) {
  const links = [
    { id:'home',    label:'Home',          href:'/glc/index.html' },
    { id:'events',  label:'Events',        href:'/glc/events.html' },
    { id:'lounges', label:'Lounge Reviews',href:'/glc/lounges.html' },
    { id:'map',     label:'World Map',     href:'/glc/map.html' },
    { id:'about',   label:'About',         href:'/glc/about.html' },
  ];

  const html = `
    <nav class="pub-nav">
      <a href="/glc/index.html" class="pub-nav-brand">
        <img src="/GLC%20Logo.png" alt="GLC" class="pub-nav-logo" />
        <span class="pub-nav-name">Gold Label Club</span>
      </a>
      <div class="pub-nav-links">
        ${links.map(l=>`<a href="${l.href}" class="pub-nav-link ${activePage===l.id?'active':''}">${l.label}</a>`).join('')}
      </div>
      <div class="pub-nav-actions">
        <a href="/portal/login.html" class="pub-nav-login">Member Login</a>
        <a href="/glc/about.html#apply" class="pub-nav-apply">Apply</a>
        <button class="pub-hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>

    <div class="pub-mobile-menu" id="pubMobileMenu">
      ${links.map(l=>`<a href="${l.href}" class="pub-mobile-link ${activePage===l.id?'active':''}">${l.label}</a>`).join('')}
      <a href="/portal/login.html" class="pub-mobile-link">Member Login</a>
      <a href="/glc/about.html#apply" class="pub-mobile-link" style="color:var(--gold)">Apply for Membership</a>
    </div>`;

  const container = document.getElementById('pubNav');
  if (container) container.innerHTML = html;

  // Close menu on outside click
  document.addEventListener('click', e => {
    const menu = document.getElementById('pubMobileMenu');
    if (menu && !e.target.closest('.pub-nav')) menu.classList.remove('open');
  });
}

function toggleMobileMenu() {
  document.getElementById('pubMobileMenu')?.classList.toggle('open');
}

/* ── PORTAL SIDEBAR ────────────────────────────── */
function renderPortalNav(activePage) {
  const user = GLC_AUTH.currentUser();
  if (!user) return;

  const mainLinks = [
    { id:'dashboard', label:'Dashboard', icon:'fa-house' },
    { id:'events',    label:'Events',    icon:'fa-calendar-star' },
    { id:'calendar',  label:'Calendar',  icon:'fa-calendar' },
    { id:'lounges',   label:'Lounges',   icon:'fa-whiskey-glass' },
    { id:'map',       label:'World Map', icon:'fa-earth-americas' },
    { id:'members',   label:'Members',   icon:'fa-users' },
    { id:'messages',  label:'Messages',  icon:'fa-message', badge:'3' },
    { id:'profile',   label:'Profile',   icon:'fa-user' },
  ];

  const adminLinks = user.role === 'admin' ? [
    { id:'admin', label:'Admin', icon:'fa-shield-halved' },
  ] : [];

  const makeLink = (l) => `
    <a href="/portal/${l.id}.html" class="nav-link ${activePage===l.id?'active':''}">
      <i class="fa-solid ${l.icon}"></i>
      ${l.label}
      ${l.badge ? `<span class="nav-badge">${l.badge}</span>` : ''}
    </a>`;

  const html = `
    <div class="sb-brand">
      <img src="/GLC%20Logo.png" alt="GLC" class="sb-logo" />
      <span class="sb-name">Gold Label Club</span>
    </div>

    <div class="sb-section">
      <div class="sb-section-label">Menu</div>
      ${mainLinks.map(makeLink).join('')}
    </div>

    ${adminLinks.length ? `
    <div class="sb-section">
      <div class="sb-section-label">Admin</div>
      ${adminLinks.map(makeLink).join('')}
    </div>` : ''}

    <div class="sb-user">
      <img src="${user.avatar}" alt="${user.name}" class="sb-av" />
      <div>
        <div class="sb-user-name">${user.firstName}</div>
        <div class="sb-user-role">${user.role === 'admin' ? 'Club Admin' : 'Member'}</div>
      </div>
    </div>`;

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.innerHTML = html;

  // Hamburger
  const burger = document.getElementById('hamburger');
  if (burger) {
    burger.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !burger.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
}

/* ── SHARED HELPERS ────────────────────────────── */
function showToast(msg, duration = 3200) {
  let c = document.querySelector('.toast-container');
  if (!c) { c = document.createElement('div'); c.className='toast-container'; document.body.appendChild(c); }
  const t = document.createElement('div');
  t.className='toast'; t.textContent=msg;
  c.appendChild(t);
  setTimeout(()=>t.classList.add('show'),10);
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),300); },duration);
}

function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function handleRsvp(eventId, status) {
  const ev = GLC.getEventById(eventId);
  if (!ev) return;
  const uid = GLC_AUTH.currentUser()?.id || 'u1';
  ['going','interested','notGoing'].forEach(s => { ev.rsvps[s] = ev.rsvps[s].filter(i=>i!==uid); });
  if (status==='going')      ev.rsvps.going.push(uid);
  if (status==='interested') ev.rsvps.interested.push(uid);
  if (status==='notGoing')   ev.rsvps.notGoing.push(uid);
  const labels = {going:'✓ You\'re going!',interested:'★ Marked as interested',notGoing:'Not going — we\'ll miss you'};
  showToast(labels[status]);
}
