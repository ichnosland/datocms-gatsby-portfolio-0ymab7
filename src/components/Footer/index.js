/* eslint-disable react/no-danger */
import React from 'react';
import { CookieBanner } from '@palmabit/react-cookie-law';

// eslint-disable-next-line react/prop-types
const Footer = ({ data }) =>
(
  <footer>
    <p>{data.datoCmsHome.copyright}</p>
    <p className="mini-p" dangerouslySetInnerHTML={{ __html: data.datoCmsHome.footer }} ></p>
    <CookieBanner
      message={data.datoCmsHome.cookieBanner}
      policyLink="/#"
      privacyPolicyLinkText="Privacy Policy"
      necessaryOptionText="Necessary"
      preferencesOptionText="Preferences"
      statisticsOptionText="Statistics"
      marketingOptionText="Marketing"
      acceptButtonText="Accept"
      declineButtonText="Decline"
      showDeclineButton={false}
      dismissOnScroll={false}
      onAccept={() => console.log('onAccept')}
      onAcceptPreferences={() => console.log('onAcceptPreferences')}
      onAcceptStatistics={() => console.log('onAcceptStatistics')}
      onAcceptMarketing={() => console.log('onAcceptMarketing')}
      onDeclinePreferences={() => console.log('onDeclinePreferences')}
      onDeclineStatistics={() => console.log('onDeclineStatistics')}
      onDeclineMarketing={() => console.log('onDeclineMarketing')}
    >
    </CookieBanner>
  </footer>
);

export default Footer;
