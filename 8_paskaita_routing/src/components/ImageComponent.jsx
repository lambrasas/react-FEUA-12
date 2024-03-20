import React from "react";
import PropTypes from "prop-types";
import picture1 from "../assets/picture1.svg";
import picture2 from "../assets/picture2.svg";
import picture3 from "../assets/picture3.svg";
import picture4 from "../assets/picture4.svg";
import picture5 from "../assets/picture5.svg";
import picture6 from "../assets/picture6.svg";
import picture7 from "../assets/picture7.svg";
import picture8 from "../assets/picture8.svg";
import "./ImageComponent.css";

const images = {
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture8,
};

const ImageComponent = ({ imageName }) => {
  const imageSrc = images[imageName];
  return (
    <div className="image-container">
      <img className="atliktiImage" src={imageSrc} alt="Atliktas Darbas" />
    </div>
  );
};

ImageComponent.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImageComponent;
