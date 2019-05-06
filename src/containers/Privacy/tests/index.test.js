/**
 * Test the Privacy page
 */

import React from 'react';
import { shallow } from 'enzyme';
import Privacy from '../index';

describe('<Privacy />', () => {
  it('should render the Privacy content', () => {
    const renderedComponent = shallow(
      <Privacy />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
