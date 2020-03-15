import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos';
import { Provider } from 'react-redux';
import store from '../store';

describe('UserRepos component', () => {
  it('renders UserRepos', () => {
    const wrapper = shallow(<Provider store={store}><UserRepos /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});