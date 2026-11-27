import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import BrandLogo from '../components/shared/BrandLogo.jsx';
import ThemeToggle from '../components/shared/ThemeToggle.jsx';

const NAV_ITEMS = [
  { label: 'Overview', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
];

/**
 * Primary workspace layout shell featuring adaptive light/dark editorial surfaces,
 * translucent frosted glass sidebar, top utility bar, and child <Outlet /> slot.
 */
function MainLayout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className="relative flex min-h-screen bg-surface text-on-surface transition-colors duration-200">
      {/* Subtle ambient backdrop behind glass surfaces */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-36 left-40 h-[520px] w-[520px] rounded-full bg-lavender-soft/75 opacity-75 blur-3xl dark:opacity-45" />
        <div className="absolute top-48 right-16 h-[420px] w-[420px] rounded-full bg-surface-high/60 opacity-60 blur-3xl dark:opacity-35" />
      </div>

      {/* Frosted Glass Sidebar */}
      <aside className="sticky top-0 z-20 hidden min-h-screen w-64 shrink-0 flex-col justify-between border-r border-outline-variant/75 bg-surface-card/75 p-4 backdrop-blur-xl md:flex">
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-1">
            <BrandLogo />
          </div>

          <nav aria-label="Primary navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
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
        </div>

        <div className="border-t border-outline-variant/70 pt-4">
          <div className="flex items-center gap-2 text-[12px] text-on-surface-muted">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span>Guest preview mode</span>
          </div>
        </div>
      </aside>

      {/* Main Column */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        {/* Floating Glass Top Bar */}
        <header className="sticky top-0 z-20 px-4 pt-4 pb-3 lg:px-8">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-xl border border-outline-variant/75 bg-surface-card/75 px-4 py-2.5 shadow-[0_6px_22px_-6px_rgba(59,53,107,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <BrandLogo showSubtitle={false} />
              </div>
              <span className="hidden font-mono text-[12px] text-on-surface-muted sm:inline">
                mergenest-workspace / v1
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isHomePage && <ThemeToggle />}
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
            </div>
          </div>
        </header>

        {/* Child Page Slot */}
        <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-3 pb-10 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
