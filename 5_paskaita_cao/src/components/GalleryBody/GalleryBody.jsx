import React from "react";
import PropTypes from 'prop-types'
import './GalleryBody.css'
import Gallery from '../Gallery/Gallery.jsx'

const GalleryBody = () =>{
    return(
        <div className="galleryBody">
            <div className="galleryBodyHeader">
                <h1>Portfolio</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique distinctio iure quia ipsa repellendus soluta quibusdam at error voluptate aspernatur.</p>
            </div>
        <Gallery info='Nice field'/>
        </div>
    )
   
    
}
export default GalleryBody;