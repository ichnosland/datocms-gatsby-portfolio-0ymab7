import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Footer(prop) {
  return (
    <footer>
      <p>{JSON.stringify(prop)}</p>
      <p>{prop.data.datoCmsHome.copyright}</p>
      <p className="mini-p" dangerouslySetInnerHTML={{ __html: prop.data.datoCmsHome.footer }}></p>
      <CookieConsent >
        <p dangerouslySetInnerHTML={{ __html: prop.data.datoCmsHome.cookieBanner }}></p>
      </CookieConsent>
    </footer>
  );
}

export default Footer;
