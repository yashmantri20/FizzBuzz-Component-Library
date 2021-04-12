import "./Image.css";
import React, { useState } from "react";

export const Image = ({ src, alt, size, rounded, fallBackSrc, ...rest }) => {
  const [fallback, setFallback] = useState(false);
  const handleFallback = () => {
    setFallback(true);
  };
  return (
    <div>
      <img
        {...rest}
        onError={handleFallback}
        src={fallback ? fallBackSrc : src}
        alt={alt}
        className={`${size}-image ${rounded}-round`}
      />
    </div>
  );
};

Image.defaultProps = {
  src: "https://picsum.photos/200/300",
  alt: "image",
  size: "lg",
  rounded: "sm",
  fallBackSrc: "",
};
