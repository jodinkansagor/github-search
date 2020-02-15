import React from 'react';
import { shallow } from 'enzyme';
import NameSearch from './NameSearch';
import { Provider } from 'react-redux';
import store from '../store';

describe('Name search component', () => {
  it('render the name search', () => {
    const wrapper = shallow(<Provider store={store}><NameSearch /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});