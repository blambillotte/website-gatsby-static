import React from 'react';

const getYear = () => {
  const year = new Date().getFullYear();
  return year.toString();
};

const Footer = () => (
  <div className="footer">
    <span>Ben Lambillotte ⓒ {getYear()}</span>
  </div>
);

export default Footer;
