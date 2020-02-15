import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Repo />);
    expect(wrapper).toMatchSnapshot();
  });
});
