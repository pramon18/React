import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { ReactNode } from 'react';
import { DarkMode } from '@mui/icons-material';

interface IListItemLinkProps {
  to: string;
  icon: ReactNode;
  label: string;  
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {  
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false});

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return(
    // O comando !! aparentemente checa por nulo
    // Também pode ser utilizado um if ternário
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, drawerOptions, toggleDrawerOpen} = useDrawerContext();
  const {toggleTheme} = useAppThemeContext();

  return(
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection='column'>
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{height: theme.spacing(12), width : theme.spacing(12)}} 
              src='logo192.png'/>
          </Box>          
          <Divider />
          <Box flex={1} flexDirection={'column'}>
            <List component='nav'>
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  key={drawerOption.path} 
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}/>
              ))}              
            </List>           
          </Box>
          <Box>
            <ListItemButton onClick={toggleTheme}>
              <ListItemIcon>
                <DarkMode/>
              </ListItemIcon>
              <ListItemText primary={'Alternar Tema'} />
            </ListItemButton>
          </Box> 
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        { children }
      </Box>            
    </>    
  );
};