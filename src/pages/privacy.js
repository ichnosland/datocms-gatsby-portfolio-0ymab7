/**
 *
 * Privacy
 *
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';
import Privacy from '../containers/Privacy';
import '../styles/index.sass';


const PrivacyPage = () =>
(<StaticQuery
  query={graphql`
    {
      datoCmsPrivacyPage {
        contenuto
        titolo
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        copyright
        footer
        cookieBanner
      }
    }
  `}
  render={(data) => (<div>
    <Privacy data={data.datoCmsPrivacyPage} />
    <Footer data={data} />
  </div>)}
/>);


export default PrivacyPage;
