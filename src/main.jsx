import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.css'
import App from './App.jsx'
import Routing from './routes/Routing.jsx';
import SessionProvider from './context/SessionProvider.jsx';
import FavoritesProvider from './context/FavoritesProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider>
      <FavoritesProvider>
        <Routing />
        <App />
      </FavoritesProvider>
    </SessionProvider>
  </StrictMode>,
)
