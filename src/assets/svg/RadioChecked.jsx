import React from 'react';

const RadioChecked = ({ className = '', width = 20, height = 21, ...props }) => {
  const src = new URL('./radiocheck.svg', import.meta.url).href;
  return (
    <img src={src} width={width} height={height} className={className} alt="radio checked" {...props} />
  );
};

export default RadioChecked;
