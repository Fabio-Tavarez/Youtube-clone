
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";
import AboutUs from "./Components/About";
import Search from "./Components/Search";
import View from "./Components/View";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/videos/:id" element={<View/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
