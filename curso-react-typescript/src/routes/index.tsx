import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';
import { Home, Star } from '@mui/icons-material';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { 
        icon: <Home/>,
        path: '/pagina-inicial',
        label: 'Página Inicial'
      },
      { 
        icon: <Star/>,
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