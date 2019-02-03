import React from 'react';

const getYear = () => {
  const year = new Date().getFullYear();
  return year.toString();
};

const Footer = () => (
  <div className="footer">
    <p>Built with <span role="img" aria-label="heart">❤️</span> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> by Ben Lambillote ⓒ {getYear()}</p>
  </div>
);

export default Footer;
