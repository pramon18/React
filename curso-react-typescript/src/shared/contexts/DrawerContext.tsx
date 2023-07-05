import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOptions:(newDraweOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
  icon: ReactNode;
  path: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);          
};

interface IDrawerContextProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerContextProviderProps> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);  

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);  

  return (
    <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
      {children}
    </DrawerContext.Provider>
  );
};