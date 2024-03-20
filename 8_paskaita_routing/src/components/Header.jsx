import React from "react";
import { Link } from "react-router-dom";
import picture from "../assets/logo-generic.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={picture} alt="generic logo" />
        <nav>
          <Link to="/">Pagrindinis</Link>
          <Link to="/apie-mus">Apie mus</Link>
          <Link to="/naujienos">Naujienos</Link>
          <Link to="/paslaugos">Paslaugos</Link>
          <Link to="/atlikti-darbai">Atlikti darbai</Link>
          <Link to="/kontaktai">Kontaktai</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
