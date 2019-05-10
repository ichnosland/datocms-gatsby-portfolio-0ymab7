/**
 *
 * SurveyPage
 *
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';
import Survey from "../containers/Survey"
import '../styles/index.sass';


const SurveyPage = ({ formContatti }) => {
    return (<StaticQuery query={graphql`
    {
        datoCmsSurveyPage {
        contenuto
        titolo
      }
    }
  `} render={data => (<div>
      <Survey data={data.datoCmsPSurveyPage}/>
    <Footer />
    </div>)} />);
}


export default SurveyPage