import React from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({ type = 'button', text, secondary, small, className = '' }) => {
  // Combine additional classes based on props
  const buttonClass = `btn ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${className}`;

  return (
    <div className="btn-wrapper">
      <button type={type} className={buttonClass}>
        {text}
      </button>
    </div>
  );
};

// Define PropTypes for the Button component
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
