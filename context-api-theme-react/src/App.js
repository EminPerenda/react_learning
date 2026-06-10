import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>
  );
}

export default App;
