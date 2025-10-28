import React from 'react';

const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#264DE4" d="M3.3,2L5,20.2L12,22l7-1.8L20.7,2H3.3z"/>
    <path fill="#2965F1" d="M12,4V19.9L17.6,18.5L18.7,4H12z"/>
    <path fill="#EBEBEB" d="M12,8.8h3.5l-0.3,2.3H12V8.8z M12,13.2h2.4l-0.3,2.7l-2.1,0.6v2.3l4.1-1.1l0.4-5.5H12V13.2z"/>
    <path fill="#FFFFFF" d="M12,8.8v2.3H8.8l-0.2-2.3H12z M12,13.2v2.3H9.9l-0.1-1.1H12z M12,15.5v2.3l-2.1-0.7l-0.1-1.1h-2l0.3,3.2l3.9,1.1v2.3L7.1,19l-0.5-5.8H12V15.5z"/>
  </svg>
);

export default CssIcon;