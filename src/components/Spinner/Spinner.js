import "./Spinner.css";
import React from "react";

export const Spinner = ({ bg, size, ...rest }) => {

  const style = {};
  Object.assign(style, { ...rest }.style);

  if (bg) {
    Object.assign(style, {
      color: bg
    });
  }

  return (
    <div
      className={`loader ${size}-loader`}
      {...rest}
      style={style}
    ></div>
  );
};

Spinner.defaultProps = {
  bg: "",
  size: "md",
};
