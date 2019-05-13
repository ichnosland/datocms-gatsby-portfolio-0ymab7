import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import HomePage from '../containers/HomePage';
import '../styles/index.sass';

const TemplateWrapper = function render() {
  return (
    <StaticQuery
      query={graphql`
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
          copyright
          footer
          cookieBanner
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
      render={(data) => (
        <div>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsHome.seoMetaTags} />
          <HomePage data={data}></HomePage>
        </div>
    )}
    />);
};

export default TemplateWrapper;
