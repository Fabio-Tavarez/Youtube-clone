
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";
import AboutUs from "./Components/About";
import Search from "./Components/Search";


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Search />}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
