import React from "react";
import ImageComponent from "../components/ImageComponent";
import "../components/AtliktiDarbai.css";

const AtliktiDarbai = () => {
  return (
    <div className="gallery">
      <ImageComponent imageName="picture1" />
      <ImageComponent imageName="picture2" />
      <ImageComponent imageName="picture3" />
      <ImageComponent imageName="picture4" />
      <ImageComponent imageName="picture5" />
      <ImageComponent imageName="picture6" />
      <ImageComponent imageName="picture7" />
      <ImageComponent imageName="picture8" />
    </div>
  );
};

export default AtliktiDarbai;
