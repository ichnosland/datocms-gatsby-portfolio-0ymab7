import React from 'react';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="seo"><a href="/"><span>Maieutical Labs</span></a></h1>
          <div className="menu">
            <a href="#prodotti">Prodotti</a>
            <a href="#chisiamo">Chi Siamo</a>
            <a href="#contatti">Contatti</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
