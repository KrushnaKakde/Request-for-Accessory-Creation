import React from 'react';

const MinusIcon = (props) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ display: 'block', pointerEvents: 'none' }}
      {...props}
    >
      <path d="M5.21994 9.21875C4.77994 9.21875 4.43994 9.55875 4.43994 9.99875C4.43994 10.4387 4.77994 10.7787 5.21994 10.7787H14.7799C15.2199 10.7787 15.5599 10.4387 15.5599 9.99875C15.5599 9.55875 15.2199 9.21875 14.7799 9.21875H9.21994H5.21994Z" fill="#333333"/>
    </svg>
  );
};

export default MinusIcon;
