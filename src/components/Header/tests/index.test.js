import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('<Header />', () => {
  it('should render the Header content', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('header').length).toBe(1);
    expect(renderedComponent.find('header > div').length).toBe(1);
    expect(renderedComponent.find('header > div > h1').length).toBe(1);
    expect(renderedComponent.find('header > div > div > a').length).toBe(3);
  });
});
