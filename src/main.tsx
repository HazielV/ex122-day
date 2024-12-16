import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Panaderia from './components/panaderia.tsx'
import Carnes from './components/carnes.tsx'
import Verduras from './components/verduras.tsx'
import Frutas from './components/frutas.tsx'
import Lacteos from './components/lacteos.tsx'
import Bebidas from './components/bebidas.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carnes" element={<Carnes />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/lacteos" element={<Lacteos />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
