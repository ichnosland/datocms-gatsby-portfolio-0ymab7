/* eslint-disable react/no-danger */
import React from 'react';
import CookieConsent from 'react-cookie-consent';

// eslint-disable-next-line react/prop-types
const Footer = ({ data }) =>
(
  <footer>
    <p>{data.datoCmsHome.copyright}</p>
    <p className="mini-p" dangerouslySetInnerHTML={{ __html: data.datoCmsHome.footer }} ></p>
    <CookieConsent>
        Al fine di offrire il miglior servizio possibile questo sito utilizza cookies tecnici e di terze parti per funzionalità quali l'accesso tramite social network e/o la visualizzazione di media. Se non acconsenti all'utilizzo dei cookie di terze parti, alcune di queste funzionalità potrebbero essere non disponibili. Chiudendo questo banner o proseguendo con la navigazione acconsentirai al loro impiego. Per saperne di più o negare il consenso a tutti o ad alcuni cookie puoi consultare l'informativa sulla privacy.
    </CookieConsent>
  </footer>
);

export default Footer;
