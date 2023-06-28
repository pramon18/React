import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { 
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial'
      },
      { 
        icon: 'star',
        path: '/cidades',
        label: 'Cidades'
      },      
    ]);
  }, []);

  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>}/>      
      <Route path="/cidades" element={<Dashboard/>}/>      
    </Routes>
  );
};