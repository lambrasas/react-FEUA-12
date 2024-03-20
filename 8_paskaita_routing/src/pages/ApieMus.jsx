import React from "react";
import aboutPicture from "../assets/about-picture.svg";
import "../components/ApieMus.css";

const ApieMus = () => {
  return (
    <div className="aboutContainer">
      <h1>Čia yra mano nuostabus puslapis</h1>
      <p>Sukurta Lino Ambraso</p>
      <img className="aboutPicture" src={aboutPicture} alt="" />
    </div>
  );
};

export default ApieMus;
