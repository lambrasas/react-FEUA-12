import React from "react";
import { Link } from "react-router-dom";
import DateDisplay from "./DateDisplay";
import "./DateContainer.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footerNav">
        <Link to="/">Pagrindinis</Link>
        <Link to="/apie-mus">Apie mus</Link>
        <Link to="/naujienos">Naujienos</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/atlikti-darbai">Atlikti darbai</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </nav>
      <div className="dateContainer">
        <p>Visos teisės saugomos</p>
        <DateDisplay />
      </div>
    </footer>
  );
};

export default Footer;
