import React from "react";
import './Hero.css'
import PropTypes from 'prop-types'
const Hero = ({title, subtitle, buttonText}) =>{

    return(
        <div className="heroContainer">
        <div className="heroTitleContainer">
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
            {buttonText && <button>{buttonText}</button>}
        </div>
    </div>
    )
}

export default Hero;