import React from 'react';
import CookieConsent from "react-cookie-consent";

function Footer({ data }) {
  return (
    <footer>
      
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </footer>
  );
} 

export default Footer;
