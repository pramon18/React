import Button from '@mui/material/Button';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}> <p>TOGGLE THEME</p></Button>}/>

      <Route path="*" element ={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  );
};