import { createTheme, Theme } from "@mui/material";

export const CustomTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#03D69D",
      light: "#E5E5E5",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F4FBF9",
    },
  },
  typography: {
    fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
  },
});
