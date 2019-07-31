import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";

import "./styles.css";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div>
        <h1>Awesome Coffee</h1>
        <nav>
          <Link to="/">Menu</Link> | <Link to="about">About</Link> |{" "}
          <Link to="contact">Contact</Link>
        </nav>
      </div>
      <Router>
        <Menu path="/" />
        <About path="about" />
        <Contact path="contact" />
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
