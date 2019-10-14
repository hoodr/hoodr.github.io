import React from 'react';
import FooterDescription from './footer-description';
import FooterLinks from './links';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-description">
          <FooterDescription />
        </div>
        <div className="footer-links">
          <FooterLinks {...props}/>
        </div>
      </div>
    </div>
  );
};


export default Footer;
