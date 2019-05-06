import React from 'react';
import { shallow } from 'enzyme';

import Didattica from '../Didattica';

describe('<Main />', () => {
  it('should render Didattica component', () => {
    const renderedComponent = shallow(
      <Didattica />
    );
    expect(renderedComponent.find('section').length).toBe(2);
    expect(renderedComponent.find('section > h2').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(1);
    expect(renderedComponent.find('section > div.container > div.col').length).toBe(2);
    expect(renderedComponent.find('section div.arrow').length).toBe(2);
  });
});
