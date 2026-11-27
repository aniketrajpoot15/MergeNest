import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ToastViewport from './components/ui/ToastViewport.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import { useAuthStore } from './stores/authStore.js';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastViewport />
    </BrowserRouter>
  );
}

export default App;
