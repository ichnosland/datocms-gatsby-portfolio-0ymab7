import React from 'react'
import PropTypes from 'prop-types'

import tabletLogo from '../images/tablet-logo.png';
import phoneLogo from '../images/phone-logo.png';

import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Header from './Header';
import Prodotti from './Main/Prodotti';
import Didattica from './Main/Didattica';

import RichiestaContatti from './Main/RichiestaContatti';
import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsProdotti {
        edges {
          node {
            logo {url} 
            title
            description
            link
          }
        }
      }
      allDatoCmsDidattica {
        edges {
          node {
            cover {url} 
            description
          }
        }
      }
    }
  `}
  render={data => (
    <div>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />
      
      <Header />
      <section id="hero">
        <div className="container">
          <div id="logo">
            <img src={tabletLogo} alt="Maieutical Labs" className="md-up-only" />
            <img src={phoneLogo} alt="Maieutical Labs" className="sm-only" />
          </div>
        </div>
      </section>
      <Prodotti data={data}/>
      <Didattica data={data}/>
      <RichiestaContatti {...formContatti}/>
    </div>
    )}
  />
)
const formContatti ={
  onSubmitForm: this.onSubmitForm,
  spinner: this.props.spinner,
  error_message: this.props.error_message,
  confirm_message: this.props.confirm_message,
  ruoli: [{
    key: 'docente',
    value: 'Docente',
  }, {
    key: 'studente',
    value: 'Studente',
  }, {
    key: 'amministrativo',
    value: 'Amministrativo',
  }, {
    key: 'genitore',
    value: 'Genitore',
  }, {
    key: 'altro',
    value: 'Altro',
  }],
};

const  formContatti = PropTypes.shape({
    spinner: PropTypes.bool.isRequired,
    error_message: PropTypes.string.isRequired,
    ruoli: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired

export default TemplateWrapper



