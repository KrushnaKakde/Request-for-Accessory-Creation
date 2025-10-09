import React from 'react';

const AddButtonIcon = ({ className = '', width = 75, height = 38, alt = 'add', ...props }) => {
  const src = new URL('./addbtn.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default AddButtonIcon;