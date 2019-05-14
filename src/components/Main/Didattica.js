import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ data }) => (
  <div>
    <section id="chisiamo" className="filler">
      <h2>Pionieri della didattica innovativa dal 2011</h2>
      <div className="arrow">
        <div className="arrow-wrap">
          <div className="outer-arrow"></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container row">
        {data.allDatoCmsDidattica.edges.map(({ node: didattica, index }) => (
          <div className="col col-1-2" key={index}>
            <img src={didattica.cover.url} className="col-icn" alt="" />
            <p>{didattica.description}</p>
          </div>
        ))}
      </div>
      <div className="arrow">
        <div className="arrow-wrap">
          <div className="inner-arrow"></div>
        </div>
      </div>
    </section>
  </div>
);
