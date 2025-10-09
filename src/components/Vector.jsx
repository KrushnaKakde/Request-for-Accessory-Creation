import React from 'react';

const Vector = ({ width = 15, height = 16, className = '' }) => {
  return (
    <img
      src="/delete.png"
      alt="Delete"
      width={width}
      height={height}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default Vector;
