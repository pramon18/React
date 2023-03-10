import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Box><Button variant="contained" color="primary" onClick={toggleDrawerOpen}> <p>TOGGLE DRAWER</p></Button> <Button variant="contained" color="primary" onClick={toggleTheme}> <p>TOGGLE THEME</p></Button></Box>}/>      

      <Route path="*" element ={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  );
};