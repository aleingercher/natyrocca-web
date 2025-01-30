import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import CesteriaTextil from '../pages/CesteriaTextil/CesteriaTextil';
import Fotografia from '../pages/Fotografia/Fotografia';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/sobre-mi" element={<MainLayout><About /></MainLayout>} />
      <Route path="/cesteria-textil" element={<MainLayout><CesteriaTextil /></MainLayout>} />
      <Route path="/fotografia" element={<MainLayout><Fotografia /></MainLayout>} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
};

export default AppRouter;