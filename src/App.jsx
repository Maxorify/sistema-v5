import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.scss"; // ajustá esta ruta según tu carpeta
import Dashboard from "./components/Dashboard"; // o donde tengas tu componente principal

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
