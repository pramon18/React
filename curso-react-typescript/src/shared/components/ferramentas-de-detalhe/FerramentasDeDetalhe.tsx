import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material"

interface IFerramentasDeDetalheProps{
  textoBotaoNovo?: string;
  mostrarBotaoNovo?:boolean;
  mostrarBotaoVoltar?:boolean;
  mostrarBotaoApagar?:boolean;
  mostrarBotaoSalvar?:boolean;
  mostrarBotaoSalvarEFechar?:boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,

}) => {

  const theme = useTheme();

  return (
    <Box 
      gap={1} 
      marginX={1} 
      padding={1} 
      paddingX={2} 
      display="flex"
      alignItems="center"
      height={theme.spacing(5)} 
      component={Paper}
    >
      { mostrarBotaoSalvar &&
        (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            startIcon={<Save/>}
            onClick={aoClicarEmSalvar}
          >Salvar</Button>
        )
      }
      { mostrarBotaoSalvarEFechar &&
        (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Save/>}
            onClick={aoClicarEmSalvarEFechar}
          >Salvar e Voltar</Button>
        )
      }

      { mostrarBotaoApagar &&
        (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Delete/>}
            onClick={aoClicarEmApagar}
          >Apagar</Button>
        )
      }
      { mostrarBotaoNovo &&
        (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Add/>}
            onClick={aoClicarEmNovo}
          >{textoBotaoNovo}</Button>
        )
      }
      
      { mostrarBotaoVoltar &&
        (
          <>
          <Divider variant="middle" orientation="vertical" />
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<ArrowBack/>}
            onClick={aoClicarEmVoltar}
          >Voltar</Button>      
          </>
        )
      }
    </Box>
  );
}