import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a
        href="https://github.com/jlifs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jennifer Lifsey
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/jlifs/jlifs-dictionary-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://shimmering-meerkat-b84b6c.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
