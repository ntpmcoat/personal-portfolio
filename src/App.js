import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/style.css";
import Home from "../src/components/Home.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;


