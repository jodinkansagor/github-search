import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';
import { Provider } from 'react-redux';
import store from '../store';

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<Provider store={store}><UserInfo /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
