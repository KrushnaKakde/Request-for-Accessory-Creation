import React from 'react';

const SubmitButtonIcon = ({ className = '', width = 95, height = 36, alt = 'Submit', ...props }) => {
  const src = new URL('./submit.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default SubmitButtonIcon;
