import "./Progress.css";
import React from "react";

export const Progress = ({ value, bg, type, ...rest }) => {
  return (
    <div className="progress-bar" {...rest}>
      <div
        className={`progress-${type}`}
        style={{
          width: `${value}%`,
          backgroundColor: bg,
        }}
      ></div>
    </div>
  );
};

Progress.defaultProps = {
  type: "striped",
  bg: "#3182CE",
  value: "50",
};
