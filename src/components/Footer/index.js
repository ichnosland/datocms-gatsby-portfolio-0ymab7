import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Footer(data) {
  return (
    <footer>
      <p>{data.data.datoCmsHome.copyright}</p>
      <p className="mini-p" dangerouslySetInnerHTML={{ __html: data.data.datoCmsHome.footer }}></p>
      <CookieConsent >
        <p dangerouslySetInnerHTML={{ __html: data.data.datoCmsHome.cookieBanner }}></p>
      </CookieConsent>
    </footer>
  );
}

export default Footer;
