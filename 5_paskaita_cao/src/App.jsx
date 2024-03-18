import React from "react";
import PropTypes from 'prop-types'
import Hero from "./components/Hero"
import GalleryBody from './components/GalleryBody/GalleryBody.jsx'


const App =() =>{
    return(
        <div className="viewport">
           <Hero title="Hello" subtitle="It's me" buttonText="I was wondering if after all these years you'd like to meet"/>
           <GalleryBody/>
        </div>
        
    );
}

export default App;

