import React from 'react';

import icnChi from '../../images/chi-icn.png';
import icnDigFirst from '../../images/dig-first-icn.png';

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
        {data.allDatoCmsDidattica.edges.map(({ node: didattica }) => (          
          <div className="col col-1-2">
            <img src={didattica.cover.src} className="col-icn" alt="" />
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
  )
