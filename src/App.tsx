import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HomePage } from "./pages";
import { darkTheme } from "./theme";
import BaseLayout from "./layout/base";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BaseLayout>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
