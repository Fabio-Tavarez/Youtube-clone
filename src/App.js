import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
    </div>
  );
}

export default App;
