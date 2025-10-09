import React from 'react';

const CalendarDropIcon = ({ className = '', width = 16, height = 17, alt = 'calendar', ...props }) => {
  const src = new URL('./calanderdrop.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default CalendarDropIcon;
