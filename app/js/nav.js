/* ═══════════════════════════════════════════════════════
   GOLD LABEL CLUB — SHARED NAVIGATION
   ═══════════════════════════════════════════════════════ */

function renderNav(activePage) {
  const u = GLC.currentUser;
  const isAdmin = u.role === 'admin';

  const navItems = [
    { id:'dashboard', label:'Dashboard', icon:'fa-house',        href:'dashboard.html' },
    { id:'events',    label:'Events',    icon:'fa-calendar-star',href:'events.html' },
    { id:'calendar',  label:'Calendar',  icon:'fa-calendar',     href:'calendar.html' },
    { id:'lounges',   label:'Lounges',   icon:'fa-whiskey-glass',href:'lounges.html' },
    { id:'map',       label:'World Map', icon:'fa-earth-americas',href:'map.html' },
    { id:'members',   label:'Members',   icon:'fa-users',        href:'members.html' },
  ];

  const adminItems = isAdmin ? [
    { id:'admin', label:'Admin', icon:'fa-shield-halved', href:'admin.html' },
  ] : [];

  const mainLinks = navItems.map(n => `
    <a href="${n.href}" class="nav-link ${activePage === n.id ? 'active' : ''}">
      <i class="fa-solid ${n.icon}"></i>
      ${n.label}
    </a>`).join('');

  const adminLinks = adminItems.map(n => `
    <a href="${n.href}" class="nav-link ${activePage === n.id ? 'active' : ''}">
      <i class="fa-solid ${n.icon}"></i>
      ${n.label}
      <span class="nav-badge" id="adminBadge" style="display:none">!</span>
    </a>`).join('');

  const html = `
    <div class="sb-brand">
      <img src="../GLC%20Logo.png" alt="GLC" class="sb-logo" />
      <span class="sb-name">Gold Label Club</span>
    </div>

    <div class="sb-section">
      <div class="sb-section-label">Menu</div>
      ${mainLinks}
    </div>

    ${adminLinks ? `<div class="sb-section"><div class="sb-section-label">Admin</div>${adminLinks}</div>` : ''}

    <div class="sb-user">
      <img src="${u.avatar}" alt="${u.name}" class="sb-avatar" />
      <div class="sb-user-info">
        <div class="sb-user-name">${u.firstName}</div>
        <div class="sb-user-role">${u.role === 'admin' ? 'Club Admin' : 'Member'}</div>
      </div>
    </div>`;

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.innerHTML = html;

  // Mobile hamburger toggle
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Show admin badge if there are pending suggestions
  const badge = document.getElementById('adminBadge');
  if (badge && GLC.suggestedLounges.filter(s => s.status === 'pending').length > 0) {
    badge.style.display = 'inline-block';
  }
}

/* ── TOAST HELPER ─────────────────────────────────────── */
function showToast(msg, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ── MODAL HELPERS ────────────────────────────────────── */
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

/* ── RSVP HANDLER ─────────────────────────────────────── */
function handleRsvp(eventId, status) {
  const event = GLC.getEventById(eventId);
  if (!event) return;
  const uid = GLC.currentUser.id;

  // Remove from all lists
  ['going','interested','notGoing'].forEach(s => {
    event.rsvps[s] = event.rsvps[s].filter(id => id !== uid);
  });

  // Add to selected
  if (status === 'going')      event.rsvps.going.push(uid);
  if (status === 'interested') event.rsvps.interested.push(uid);
  if (status === 'notGoing')   event.rsvps.notGoing.push(uid);

  GLC.currentUser.rsvps[eventId] = status;

  const labels = { going:'✓ You\'re going', interested:'★ Marked as interested', notGoing:'Not going — we\'ll miss you' };
  showToast(labels[status]);
}
