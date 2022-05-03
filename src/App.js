
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import Home from "./components/Home.js"
import About from "./components/About.js"
import Dove from "./components/Dove.js"
import Header from "./layouts/Header"

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dovesiamo" element={<Dove />} />
        </Routes>
    </Router>
  );
}

export default App;
