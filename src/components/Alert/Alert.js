import './Alert.css';
import React from 'react';
import { FcInfo } from 'react-icons/fc';
import { MdError } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Alert = ({ status, variant, title, text, children, ...rest }) => {
  let statusIcon;

  switch (status) {
    case 'info':
      statusIcon = <FcInfo size={24} color="#3182CE" />;
      break;

    case 'success':
      statusIcon = <AiFillCheckCircle size={24} color="#38A169" />;
      break;

    case 'warning':
      statusIcon = <MdError size={24} color="#DD6B20" />;
      break;

    case 'error':
      statusIcon = <MdError size={24} color="#E53E3E" />;
      break;

    default:
      break;
  }

  return (
    <div className={`alert-box ${status}-alert-${variant}`} {...rest}>
      {children ? children : statusIcon}
      <span className="alert-title">{title}</span>
      <p>{text}</p>
    </div>
  );
};

Alert.defaultProps = {
  status: 'success',
  variant: 'solid',
  title: 'Your browser is outdated!',
  text: 'Your FizzBuzz experience may be degraded.',
};
