import React from "react";
import logo from "./logo.png";
import "./App.css"
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      <Footer />
    </div>
  </div>
  );
}