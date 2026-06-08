/* ═══════════════════════════════════════════════
   GOLD LABEL CLUB — AUTH MODULE
   Role-based access control for public + portal
   ═══════════════════════════════════════════════ */

const GLC_AUTH = {

  // Demo login — replace with Supabase auth when ready
  _demoUser: {
    id: 'u1',
    name: 'Benjamin Meister',
    firstName: 'Benjamin',
    email: 'sales@merchdaddyapparel.com',
    avatar: 'https://ui-avatars.com/api/?name=Benjamin+Meister&background=1a1714&color=c9a84c&bold=true',
    city: 'New York, NY',
    role: 'admin',
    memberSince: 'January 2024'
  },

  isLoggedIn() {
    return !!sessionStorage.getItem('glc_session');
  },

  currentUser() {
    const s = sessionStorage.getItem('glc_session');
    return s ? JSON.parse(s) : null;
  },

  isAdmin() {
    return this.currentUser()?.role === 'admin';
  },

  // Demo login — replaces with real Supabase call
  async login(email, password) {
    // Demo: accept any login for now
    if (email && password) {
      const user = { ...this._demoUser, email };
      sessionStorage.setItem('glc_session', JSON.stringify(user));
      return { user, error: null };
    }
    return { user: null, error: 'Invalid credentials' };
  },

  logout() {
    sessionStorage.removeItem('glc_session');
    window.location.href = '/portal/login.html';
  },

  // Redirect to login if not authenticated
  requireAuth(redirectTo = '/portal/login.html') {
    if (!this.isLoggedIn()) {
      window.location.href = redirectTo;
      return false;
    }
    return true;
  },

  // Redirect to dashboard if not admin
  requireAdmin() {
    if (!this.isAdmin()) {
      window.location.href = '/portal/dashboard.html';
      return false;
    }
    return true;
  },

  // For portal pages: check auth and return user or redirect
  guard() {
    if (!this.requireAuth()) return null;
    return this.currentUser();
  }
};
