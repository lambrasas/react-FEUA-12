import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ name }) => {
  const getInitials = (name) => {
    return name.split(' ')
               .map((n) => n[0])
               .join('');
  };

  return (
      <div className="avatar">
        {getInitials(name)}
      </div>
    
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired
};

export default Avatar;
