import React from 'react';
import CookieConsent from "react-cookie-consent";

function Footer({ data }) {
  return (
    <footer>
      <p>{data.datoCmsHome.copyright}</p>
      <p className="mini-p">{data.datoCmsHome.footerInfo}</p>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </footer>
  );
} 

export default Footer;
