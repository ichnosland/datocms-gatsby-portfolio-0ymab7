import React from 'react';
import { Link } from "gatsby"

export class Privacy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
          <h1>{this.props.data.titolo}</h1>
          <div dangerouslySetInnerHTML={{__html:this.props.data.contenuto }} ></div>
        </div>
      </div>
    );
  }
}

export default Privacy;
