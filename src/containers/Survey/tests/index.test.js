/**
 * Test the Survey page
 */

import React from 'react';
import { shallow } from 'enzyme';
import Survey from '../index';

describe('<Survey />', () => {
  it('should render the Privacy content', () => {
    const renderedComponent = shallow(
      <Survey />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
