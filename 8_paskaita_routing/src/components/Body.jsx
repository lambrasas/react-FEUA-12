import React from "react";
import Pagrindinis from "../pages/Pagrindinis";
import Naujienos from "../pages/Naujienos";
import ApieMus from "../pages/ApieMus";
import Paslaugos from "../pages/Paslaugos";
import AtliktiDarbai from "../pages/AtliktiDarbai";
import Kontaktai from "../pages/Kontaktai";
import { Route, Routes } from "react-router-dom";
const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Pagrindinis />} />
        <Route path="/apie-mus" element={<ApieMus />} />
        <Route path="/naujienos" element={<Naujienos />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/atlikti-darbai" element={<AtliktiDarbai />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
      </Routes>
    </main>
  );
};

export default Body;
