import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import CesteriaTextil from '../pages/CesteriaTextil/CesteriaTextil';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/cesteria-textil" element={<MainLayout><CesteriaTextil /></MainLayout>} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
};

export default AppRouter;