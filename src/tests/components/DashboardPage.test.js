import React from 'react';
import { shallow } from 'enzyme';
import HouseSelect from '../../components/HouseSelect';

test('should render Expense Dashboard Page', () => {
  const wrapper = shallow(<HouseSelect />);
  expect(wrapper).toMatchSnapshot();
});