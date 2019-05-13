import React from 'react';
// import CookieConsent from 'react-cookie-consent';

function Footer(prop) {
  return (
    <footer>
      <p>{JSON.stringify(prop.data)}</p>
    </footer>
  );
}

export default Footer;
