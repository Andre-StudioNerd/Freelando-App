import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#fff",
    atencao: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "#777772",
      c: "#777772",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "#373737",
      b: "",
      c: "",
    },
    dark: {
      a: "##612a4b",
      b: "#612a4b",
    },
  },
  espacamentos: {
    s: "16px",
    l: "32px",
    m: "0px",
    xs: "8px",
  },
  fontFamily: "'Montserrat', sans-serif",
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
