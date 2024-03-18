import PropTypes from "prop-types";

const Hero = ({ title, subtitle, color = "green" }) => {
  return (
    <div style={{ backgroundColor: color, padding: "1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

// Old way
// Hero.defaultProps = {
//   color: "red",
// };

export default Hero;




// import React from 'react';
// import "./Hero.css"
// import PropTypes from 'prop-types'

// const Hero = ({title, subtitle,color}) =>{
//     return (
//         <>
//         <div className={color}>
//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//         </div>
//         </>
   
//     )
// }
// Hero.propTypes = {
//     title: PropTypes.string.isRequired,
//     subtitle:PropTypes.string,
//     color: PropTypes.string
// }

// //OLD way
// // Hero.defaultProps = {
// //     color:"red"
// // }
// export default Hero;
