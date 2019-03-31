import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ color, width, size }) => {
  return (
    <div style={{ borderBottom: `${size}px solid ${color}`, width, margin: '16px 0' }} />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
};

export default Divider;
