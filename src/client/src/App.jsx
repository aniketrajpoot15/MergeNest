import { BrowserRouter } from 'react-router-dom';
import ToastViewport from './components/ui/ToastViewport.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastViewport />
    </BrowserRouter>
  );
}

export default App;
