import './Tooltip.css';
import React from 'react';

export const Tooltip = ({ label, bg, textColor, children, ...rest }) => {

  const style = {};
  Object.assign(style, { ...rest }.style);

  if (bg) {
    Object.assign(style, {
      backgroundColor: bg,
      color: bg,
    });
  }

  return (
    <div className="tooltip">
      {children}
      <span
        className="tooltiptext"
        {...rest}
        style={style}
      >
        <span style={{ color: textColor }}>{label}</span>
      </span>
    </div>
  );
};

Tooltip.defaultProps = {
  label: 'Hello World',
  bg: '',
  textColor: 'white',
};
