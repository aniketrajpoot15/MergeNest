import { Navigate, Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx';
import { useAuthStore } from '../stores/authStore.js';

/**
 * Shared route gate waiting for initial checkAuth() resolution before redirecting.
 * @param {{ requireAuth: boolean, redirectTo: string }} props
 */
function AuthGuard({ requireAuth, redirectTo }) {
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  const hasCheckedAuth = useAuthStore((state) => state.hasCheckedAuth);

  if (!hasCheckedAuth || isCheckingAuth) {
    return <LoadingSpinner fullScreen label="Checking session..." />;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
