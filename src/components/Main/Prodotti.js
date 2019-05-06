import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import itacaLogo from '../../images/itaca-logo.png';
import alatinLogo from '../../images/alatin-logo.png';
import argonautaLogo from '../../images/argonauta-logo.png';
import csgLogo from '../../images/csg-logo.png';

export default ({ data }) => (
  return (
    <section id="prodotti">
      <div className="arrow top">
        <div className="arrow-wrap">
          <div className="outer-arrow"></div>
          <div className="inner-arrow"></div>
        </div>
      </div>
      
      <div>
        <p className="sidebar__social">
        {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
            ))}
          </p>
      </div>
      
      
      
      <h3>I nostri prodotti</h3>
      <div className="arrow-wrap small sm-only">
        <div className="outer-arrow small"></div>
      </div>
      <div className="container row first">
        <a className="col col-1-3 thumb-link" href="http://itaca.academy" id="itaca" title="Itaca">
          <img className="col-icn small" src={itacaLogo} alt="Itaca" />
          <p>
            Itaca è il nuovo corso di grammatica con il quale fai solo quello che ti serve: quando ne sai abbastanza, il software smette di darti esercizi.
        </p>
        </a>
        <a className="col col-1-3 thumb-link" href="http://alatin.it" id="alatin" title="Alatin">
          <img className="col-icn small" src={alatinLogo} alt="Alatin" />
          <p>
            Alatin è un personal trainer di latino. Puoi imparare dove vuoi e quando vuoi: affronta missioni con l’aiuto del dizionario e della grammatica integrati, sblocca livelli, mettiti alla prova con verifiche e versioni.
        </p>
        </a>
      </div>
      <div className="container row">
        <a className="col col-1-3 thumb-link" href="http://argonautavacanze.it" id="argonauta" title="Argonauta Vacanze">
          <img className="col-icn small" src={argonautaLogo} alt="Argonauta Vacanze" />
          <p>
            Argonauta è il libro delle vacanze che ti permette di fare i compiti delle vacanze sul cellulare o sul tablet, consegnandoli in tempo reale al docente.
        </p>
        </a>
        <a className="col col-1-3 thumb-link" href="https://www.cloudschooling.it" id="cloudschooling" title="Cloudschooling">
          <img className="col-icn small" src={csgLogo} alt="Cloudschooling" />
          <p>
            Cloudschooling è la classe virtuale che oltre 40mila studenti usano ogni anno per le loro esercitazioni con i tutor adattivi in 12 materie diverse.
        </p>
        </a>
      </div>
      <div className="arrow">
        <div className="arrow-wrap">
          <div className="inner-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
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

