/**
 * Test Main
 */


import React from 'react';
import { shallow } from 'enzyme';

import Prodotti from '../Prodotti';

describe('<Prodotti />', () => {
  it('should render Prodotti component', () => {
    const renderedComponent = shallow(
      <Prodotti />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section > h3').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(2);
    expect(renderedComponent.find('section > div.arrow').length).toBe(2);
  });
});
