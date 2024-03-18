import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card =({imageUrl,title,subtitle})=>{

    return(
        <div className="card">
            <img src={imageUrl}/>
            <div className="card-content">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="card-subtitle">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}
Card.propTypes = {
    imageUrl:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}
export default Card;