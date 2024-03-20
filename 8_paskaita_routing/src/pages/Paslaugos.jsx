import React from "react";
import PaslaugaCard from "../components/PaslaugaCard";
import "../components/Paslaugos.css";

const Paslaugos = () => {
  return (
    <div className="paslaugosContainer">
      <PaslaugaCard
        planName="Bronza"
        price="€29.99/mėn"
        description="Puiki pradžia pradedančiosioms įmonėms."
        planNameColor="#cd7f32"
        priceColor="#cd7f32"
      />
      <PaslaugaCard
        planName="Sidabras"
        price="€59.99/mėn"
        description="Mūsu populiariausias planas su pažengusioms technologijomis."
        planNameColor="silver"
        priceColor="silver"
      />
      <PaslaugaCard
        planName="Auksas"
        price="€99.99/mėn"
        description="Pažangiausias planas didžiausioms įmonėms."
        planNameColor="gold"
        priceColor="gold"
      />
    </div>
  );
};

export default Paslaugos;
