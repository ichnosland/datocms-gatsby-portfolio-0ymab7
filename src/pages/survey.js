/**
 *
 * SurveyPage
 *
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';
import Survey from '../containers/Survey';
import '../styles/index.sass';


const SurveyPage = () => (
  <StaticQuery
    query={graphql`
    {
      datoCmsSurveyPage {
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
    render={
      (data) => (<div>
        <Survey data={data.datoCmsPSurveyPage} />
        <Footer data={data} />
      </div>)}
  />);


export default SurveyPage;
