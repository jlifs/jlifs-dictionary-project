import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by Jennifer Lifsey and is open-sourced on{" "}
      <a
        href="https://github.com/jlifs/jlifs-dictionary-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://shimmering-meerkat-b84b6c.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
      .
    </footer>
  );
}
