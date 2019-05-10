/*
 *
 * Survey
 *
 */

import React from 'react';
import { Link } from "gatsby";

export class Survey extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="seo"><Link to="/"><span>Maieutical Labs</span></Link></h1>
            <div className="menu">
              <Link to="/">Indietro</Link>
            </div>
          </div>
        </header>
        <div className="container paragraph">
          <h1>Accordo relativo alla privacy dei sondaggi proposti da Maieutical Labs</h1>
           </div>
      </div>
    );
  }
}

export default Survey;
