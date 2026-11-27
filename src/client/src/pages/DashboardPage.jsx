import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore.js';
import { toast } from '../stores/toastStore.js';

/**
 * Developer dashboard view showing live Zustand authentication state (route protection arrives in Step 1.7).
 */
function DashboardPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await logout();
      toast.info('You have been signed out.', { title: 'Signed out' });
      navigate('/login');
    } catch (apiError) {
      toast.error(apiError?.message || 'Unable to sign out right now.');
    }
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      <header className="flex flex-col justify-between gap-4 border-b border-outline-variant/70 pb-6 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-on-surface">
            Developer dashboard
          </h1>
          <p className="mt-1 text-[14px] text-on-surface-muted">
            {isAuthenticated && user
              ? `Signed in as ${user.name} (${user.email})`
              : 'Your workspace overview, linked repositories, and open pull requests will live here.'}
          </p>
        </div>

        <span
          className={`inline-flex w-fit items-center gap-2 rounded-md px-3 py-1 text-[12px] font-medium ${
            isAuthenticated
              ? 'bg-success-container text-on-success-container'
              : 'bg-lavender-soft text-on-lavender-soft'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAuthenticated ? 'bg-success' : 'bg-primary'
            }`}
          />
          {isAuthenticated ? 'Session active' : 'Guest preview'}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-outline-variant/85 bg-surface-card p-6 shadow-[0_1px_2px_rgba(26,28,26,0.04)] lg:col-span-7">
          <h2 className="font-display text-[16px] font-semibold text-on-surface">
            Active projects
          </h2>
          <p className="mt-2 font-mono text-[12px] text-on-surface-muted">
            Workspaces &amp; Projects module arrives in Stage 2.
          </p>
        </div>

        <div className="rounded-xl border border-outline-variant/85 bg-surface-card/75 p-6 shadow-[0_8px_24px_-4px_rgba(59,53,107,0.07)] backdrop-blur-lg lg:col-span-5">
          <h2 className="font-display text-[16px] font-semibold text-on-surface">
            Authentication status
          </h2>

          {isAuthenticated && user ? (
            <div className="mt-3 flex flex-col gap-3">
              <div className="rounded-lg border border-outline-variant/75 bg-surface-low/80 p-3 text-[13px]">
                <p className="font-medium text-on-surface">{user.name}</p>
                <p className="font-mono text-[12px] text-on-surface-muted">
                  {user.email}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoading}
                className="inline-flex w-fit items-center rounded-lg border border-outline-variant bg-surface-card px-3.5 py-1.5 text-[13px] font-medium text-on-surface transition-colors hover:bg-surface-low disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Signing out...' : 'Sign out'}
              </button>
            </div>
          ) : (
            <>
              <p className="mt-2 text-[13px] text-on-surface-muted">
                Auth forms &amp; Zustand state are ready. Protected route guards and automatic session checks arrive in{' '}
                <span className="font-mono text-[12px] text-primary">
                  Step 1.7
                </span>
                .
              </p>
              <div className="mt-4">
                <Link
                  to="/login"
                  className="text-[13px] font-medium text-primary hover:underline"
                >
                  Go to login →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
