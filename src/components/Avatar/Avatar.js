import './Avatar.css';
import { FaUserCircle } from 'react-icons/fa';
import React, { useState } from 'react';

export const Avatar = ({ src, name, size, bgColor, ...rest }) => {
  const [imageOrName, setImageOrName] = useState('image');
  const handleBrokenImages = () => {
    if (name === '') setImageOrName('Avatar');
    else setImageOrName('Alphabet');
  };

  const style = {};
  Object.assign(style, { ...rest }.style);

  if (bgColor) {
    Object.assign(style, {
      background: bgColor
    });
  }

  return (
    <>
      {imageOrName === 'image' && (
        <img
          {...rest}
          className={`image-avatar ${size}-avatar`}
          onError={handleBrokenImages}
          src={src}
          alt='avatar'
        />
      )}
      {imageOrName === 'Alphabet' && (
        <p {...rest} style={style} className={`alphabet-avatar ${size}-alpha-avatar`}>
          {name[0]}
        </p>
      )}
      {imageOrName === 'Avatar' && (
        <FaUserCircle className={`default-avatar ${size}-avatar`} {...rest} />
      )}
    </>
  );
};

Avatar.defaultProps = {
  src: '',
  name: '',
  size: 'md',
  bgColor: '',
};
