import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
};

export default AppRouter;