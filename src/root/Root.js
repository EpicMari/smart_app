import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import AppContext from "../context";
import { GlobalStyle } from "../globalStyles/globalStyles";
import Router from "../routing/Router";
import { themes } from "../themes";
import { dataRooms } from "../data/dataRooms";

const Root = () => {
  const [rooms, setRooms] = useState(dataRooms);
  return (
    <AppContext.Provider value={{ rooms }}>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default Root;
