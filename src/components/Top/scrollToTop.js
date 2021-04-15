import "./scrollToTop.css";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollTop = ({ bg, children, ...rest }) => {

  const style = {};
  Object.assign(style, { ...rest }.style);

  if (bg) {
    Object.assign(style, {
      backgroundColor: bg,
    });
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector(".topButton").style.visibility = "visible";
    } else {
      document.querySelector(".topButton").style.visibility = "hidden";
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };

  return (
    <button
      onClick={scrollToTop}
      className="topButton"
      title="Go to top"
      {...rest}
      style={style}
    >
      {children ? children : <AiOutlineArrowUp />}
    </button>
  );
};

ScrollTop.defaultProps = {
  bg: "",
};
