import React from 'react'

import tabletLogo from '../images/tablet-logo.png';
import phoneLogo from '../images/phone-logo.png';

import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Header from './Header';
import Prodotti from './Main/Prodotti';
import Didattica from './Main/Didattica';

import RichiestaContatti from './Main/RichiestaContatti';
import '../styles/index.sass'

const TemplateWrapper = ({ formContatti }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      
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

export default TemplateWrapper