// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/index.scss';
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import "./i18n";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <AuthProvider>
    <App />
  </AuthProvider>
)
