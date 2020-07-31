import React from "react";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Grid from "./components/grid";

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Grid />
    </div>
  );
}

export default App;
