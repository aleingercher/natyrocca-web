import './App.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';  // Importa el archivo que contiene las rutas

const App: React.FC = () => {
  return (
    <BrowserRouter>  
      <AppRouter /> 
    </BrowserRouter>
  );
};

export default App;