import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore.js';
import { toast } from '../../stores/toastStore.js';
import BrandLogo from '../shared/BrandLogo.jsx';
import ThemeToggle from '../shared/ThemeToggle.jsx';

const NAV_LINKS = [
  { label: 'Overview', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
];

const getInitials = (fullName) => {
  const parts = (fullName || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'MN';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

/**
 * Floating frosted-glass top navigation bar showing logo, mobile route links,
 * Home theme toggle, and session-aware user badge / auth actions.
 */
function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const logout = useAuthStore((state) => state.logout);

  const isHomePage = pathname === '/';

  const handleLogout = async () => {
    try {
      await logout();
      toast.info('You have been signed out.', { title: 'Signed out' });
      navigate('/login', { replace: true });
    } catch (apiError) {
      toast.error(apiError?.message || 'Unable to sign out right now.');
    }
  };

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 pb-3 lg:px-8">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-xl border border-outline-variant/75 bg-surface-card/75 px-4 py-2.5 shadow-[0_6px_22px_-6px_rgba(59,53,107,0.08)] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <BrandLogo showSubtitle={false} />
          </div>

          <nav
            aria-label="Top navigation"
            className="flex items-center gap-1 md:hidden"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors ${
                    isActive
                      ? 'bg-lavender-soft/85 text-primary'
                      : 'text-on-surface-muted hover:bg-surface-low/80 hover:text-on-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <span className="hidden font-mono text-[12px] text-on-surface-muted md:inline">
            mergenest-workspace / v1
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isHomePage && <ThemeToggle />}

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-2 rounded-lg border border-outline-variant/80 bg-surface-low/75 px-2.5 py-1">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : (
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lavender-soft text-[11px] font-semibold text-on-lavender-soft">
                    {getInitials(user.name)}
                  </span>
                )}
                <span className="hidden max-w-[140px] truncate text-[13px] font-medium text-on-surface sm:inline">
                  {user.name}
                </span>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoading}
                className="rounded-lg border border-outline-variant bg-surface-card px-3 py-1.5 text-[13px] font-medium text-on-surface transition-colors hover:bg-surface-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Signing out...' : 'Logout'}
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg border border-outline-variant bg-surface-card px-3.5 py-1.5 text-[13px] font-medium text-on-surface transition-colors hover:bg-surface-low"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-primary px-3.5 py-1.5 text-[13px] font-medium text-on-primary shadow-sm transition-colors hover:bg-primary-hover"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
