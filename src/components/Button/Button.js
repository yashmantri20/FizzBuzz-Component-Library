import "./Button.css";
import React from "react";

export const Button = ({
  text,
  variant,
  size,
  colorScheme,
  isDisabled,
  leftIcon,
  rightIcon,
  rounded,
  ...rest
}) => {
  const style = {};
  Object.assign(style, { ...rest }.style);

  if (colorScheme) {
    switch (variant) {
      case "primary":
        Object.assign(style, { backgroundColor: colorScheme });
        break;

      default:
        Object.assign(style, {
          color: colorScheme,
        });
        break;
    }
  }

  return (
    <>
      <button
        {...rest}
        style={style}
        disabled={isDisabled}
        className={`button ${variant}-button ${size}-button ${rounded}-round`}
      >
        <span className="icon-button">
          {leftIcon !== "" && <span>{leftIcon}</span>}
          <span>{text}</span>
          {rightIcon !== "" && <span>{rightIcon}</span>}
        </span>
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "Button",
  variant: "primary",
  size: "md",
  colorScheme: "",
  isDisabled: false,
  rounded: "sm",
  leftIcon: "",
  rightIcon: "",
};
