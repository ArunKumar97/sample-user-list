import { TypeBackground, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
        paper: '#27292B',
        default: '#1F2023',
        header: '#191a1d',
    } as Partial<TypeBackground>
  },
});

export default darkTheme;
