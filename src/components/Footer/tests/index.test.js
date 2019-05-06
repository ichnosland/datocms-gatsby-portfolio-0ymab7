import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the Footer content', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.find('footer').length).toBe(1);
  });
});
