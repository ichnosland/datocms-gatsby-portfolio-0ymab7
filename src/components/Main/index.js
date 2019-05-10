import React from 'react';
import PropTypes from 'prop-types';

import tabletLogo from '../../images/tablet-logo.png';
import phoneLogo from '../../images/phone-logo.png';

import Header from '../Header';
import RichiestaContatti from './RichiestaContatti';
import Didattica from './Didattica';
import Prodotti from './Prodotti';

class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Header />
        <section id="hero">
          <div className="container">
            <div id="logo">
              <img src={tabletLogo} alt="Maieutical Labs" className="md-up-only" />
              <img src={phoneLogo} alt="Maieutical Labs" className="sm-only" />
            </div>
          </div>
        </section>
        <Prodotti data={this.props.data} />
        <Didattica data={this.props.data} />
        <RichiestaContatti
          {...this.props.formContatti}
        />
      </div>
    );
  }
}

Main.propTypes = {
  formContatti: PropTypes.shape({
    spinner: PropTypes.bool.isRequired,
    error_message: PropTypes.string.isRequired,
    ruoli: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Main;
