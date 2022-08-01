import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/pages/Home/index.';
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/Categoria';


const Página404 = () => (<div>Página 404</div>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route element={Página404} />
    </Routes>
  </BrowserRouter>
);
