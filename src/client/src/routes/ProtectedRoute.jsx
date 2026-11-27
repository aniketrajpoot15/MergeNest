import AuthGuard from './AuthGuard.jsx';

/**
 * Restricts nested routes to authenticated users, redirecting guests to /login.
 */
function ProtectedRoute() {
  return <AuthGuard requireAuth redirectTo="/login" />;
}

export default ProtectedRoute;
