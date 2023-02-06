import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global-styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerProvider } from "./shared/contexts";
import { Header } from "./shared/components/header";
import { AuthProvider } from "./shared/contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DrawerProvider>
          <BrowserRouter>
            <Header />
            <AppRoutes />
          </BrowserRouter>
        </DrawerProvider>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
