/**
 *
 * Privacy
 *
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Footer from '../components/Footer';
import Privacy from "../containers/Privacy"
import '../styles/index.sass';


const PrivacyPage = ({ formContatti }) => {
    return (<StaticQuery query={graphql`
    {
        datoCmsPrivacyPage {
        contenuto
        titolo
      }
    }
  `} render={data => (<div>
      <Privacy data={data.datoCmsPrivacyPage}/>
    <Footer />
    </div>)} />);
}


export default PrivacyPage