import React from 'react';

// eslint-disable-next-line react/prop-types
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
      {data.allDatoCmsProdotti.edges.map(({ node: project, index }) => (
        <a className="col col-1-3 thumb-link" href={project.link} id="itaca" title={project} key={index}>
          <img className="col-icn small" src={project.logo.url} alt={project.title} />
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
);

