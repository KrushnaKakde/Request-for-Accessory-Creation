import React from 'react';

const RadioUnchecked = ({ className = '', width = 20, height = 21, ...props }) => {
  const src = new URL('./radiouncheck.svg', import.meta.url).href;
  return (
    <img src={src} width={width} height={height} className={className} alt="radio unchecked" {...props} />
  );
};

export default RadioUnchecked;
