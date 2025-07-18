import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { BrowserRouter } from "react-router";
import AppRoutes from './AppRoutes.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
