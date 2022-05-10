import React from "react";
import './css/App.css';
import Home from "./pages/js/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Search from "./pages/js/search";
import About from "./pages/js/about";
import DetailPage from "./pages/js/detailPage";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/venue/:venueId' element={<DetailPage/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
