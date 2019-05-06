import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import itacaLogo from '../../images/itaca-logo.png';
import alatinLogo from '../../images/alatin-logo.png';
import argonautaLogo from '../../images/argonauta-logo.png';
import csgLogo from '../../images/csg-logo.png';

export default ({ data }) => (
    <section id="prodotti">
      <div className="arrow top">
        <div className="arrow-wrap">
          <div className="outer-arrow"></div>
          <div className="inner-arrow"></div>
        </div>
      </div>
      
      <h3>I nostri prodotti</h3>
      <div className="arrow-wrap small sm-only">
        <div className="outer-arrow small"></div>
      </div>
      <div className="container row row-wrap first">
        {data.allDatoCmsProdotti.edges.map(({ node: project }) => (
          
          <a className="col col-1-3 thumb-link" href={project.link} id="itaca" title={project}>
            <img className="col-icn small" src={project.logo} alt={project.title} />
            <p>
              {project.description}
            </p>
          </a>
        ))}
      </div>
      <div className="arrow">
        <div className="arrow-wrap">
          <div className="inner-arrow"></div>
        </div>
      </div>
    </section>
  )

export const query = graphql`
  query ProductQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`

