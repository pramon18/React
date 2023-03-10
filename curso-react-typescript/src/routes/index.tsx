import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

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
      <Route path="/pagina-inicial" element={<Box><Button variant="contained" color="primary" onClick={toggleDrawerOpen}> <p>TOGGLE DRAWER</p></Button> <Button variant="contained" color="primary" onClick={toggleTheme}> <p>TOGGLE THEME</p></Button></Box>}/>      
      <Route path="/cidades" element={<Box><Button variant="contained" color="primary" onClick={toggleDrawerOpen}> <p>TOGGLE DRAWER</p></Button> <Button variant="contained" color="primary" onClick={toggleTheme}> <p>TOGGLE THEME</p></Button></Box>}/>      

      {/* <Route path="*" element ={<Navigate to="/pagina-inicial"/>}/> */}
    </Routes>
  );
};