import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyles/globalStyles";
import Router from "../routing/Router";
import { themes } from "../themes";

const Root = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default Root;
