import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = props => {
  return (
    <footer className="footer">
      Calendar: {props.name}
      <Link to="/">Home</Link>
    </footer>
  );
};

// export default Footer;
