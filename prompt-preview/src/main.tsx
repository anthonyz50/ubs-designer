import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ubs/design-system/styles';
import './styles/ubs-fonts.css';
import './styles/ubs-theme.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
