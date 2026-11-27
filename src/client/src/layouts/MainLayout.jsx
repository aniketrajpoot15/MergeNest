import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import BrandLogo from '../components/shared/BrandLogo.jsx';
import { useAuthStore } from '../stores/authStore.js';

const NAV_ITEMS = [
  { label: 'Overview', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
];

/**
 * Primary workspace layout shell featuring adaptive light/dark editorial surfaces,
 * translucent frosted glass sidebar, dynamic Navbar, and child <Outlet /> slot.
 */
function MainLayout() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

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
            <span
              className={`h-2 w-2 rounded-full ${
                isAuthenticated ? 'bg-success' : 'bg-outline'
              }`}
            />
            <span className="truncate">
              {isAuthenticated && user
                ? `Signed in · ${user.email}`
                : 'Guest preview mode'}
            </span>
          </div>
        </div>
      </aside>

      {/* Main Column */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <Navbar />

        {/* Child Page Slot */}
        <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-3 pb-10 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
