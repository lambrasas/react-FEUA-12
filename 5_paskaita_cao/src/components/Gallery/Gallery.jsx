import React from "react";
import PropTypes from 'prop-types'
import './Gallery.css'
import picture1 from '../../assets/picture.jpg'
import picture2 from '../../assets/picture2.jpg'
import picture3 from '../../assets/picture3.jpeg'
import picture4 from '../../assets/picture4.jpg'
import picture5 from '../../assets/picture5.jpg'
import picture6 from '../../assets/picture6.jpg'

const Gallery = ({info}) =>{
    const pictures = [picture1, picture2,picture3,picture4,picture5,picture6]
    return(
        <div className="cardContainer">
            {pictures.map((picture, index) => (
                <div key={index} className="card">
                    <img src={picture} alt={`Gallery item ${index + 1}`} />
                    <div className="cardInfo">
                        <p>{info}</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Gallery;