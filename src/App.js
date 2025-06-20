import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import ContactMe from "./Components/ContactMe/ContactMe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
