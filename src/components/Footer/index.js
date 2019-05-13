import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Footer(data) {
  return (
    <footer>
      <p>{data.datoCmsHome.copyright}</p>
      <p className="mini-p" dangerouslySetInnerHTML={{ __html: data.datoCmsHome.footer }}></p>
      <CookieConsent >
        <p dangerouslySetInnerHTML={{ __html: data.datoCmsHome.cookieBanner }}></p>
      </CookieConsent>
    </footer>
  );
}

export default Footer;
