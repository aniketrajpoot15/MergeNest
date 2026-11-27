import AuthGuard from './AuthGuard.jsx';

/**
 * Restricts guest-only auth routes (/login, /register), redirecting signed-in users to /dashboard.
 */
function PublicRoute() {
  return <AuthGuard requireAuth={false} redirectTo="/dashboard" />;
}

export default PublicRoute;
