/**
 * Test Main
 */


import React from 'react';
import { shallow } from 'enzyme';

import Header from 'components/Header';
import RichiestaContatti from '../RichiestaContatti';
import Didattica from '../Didattica';
import Prodotti from '../Prodotti';
import Main from '../index';

describe('<Main />', () => {
  it('should render Main component', () => {
    const formContattiProps = {
      onSubmitForm: () => { },
      spinner: false,
      error_message: '',
      confirm_message: '',
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }, {
        key: 'studente',
        value: 'Studente',
      }],
    };
    const renderedComponent = shallow(
      <Main
        formContatti={formContattiProps}
      />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find(Prodotti).length).toBe(1);
    expect(renderedComponent.find(Didattica).length).toBe(1);
    expect(renderedComponent.find(RichiestaContatti).length).toBe(1);
  });
  it('should render the header', () => {
    const formContattiProps = {
      onSubmitForm: () => { },
      spinner: false,
      error_message: '',
      confirm_message: '',
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }, {
        key: 'studente',
        value: 'Studente',
      }],
    };
    const renderedComponent = shallow(
      <Main
        formContatti={formContattiProps}
      />
    );
    expect(renderedComponent.find(Header).length).toBe(1);
  });
});
