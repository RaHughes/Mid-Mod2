import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Should match snapshot', () => {
    const mockData = {
      key: 1,
      date: '',
      id: 2,
      name: '',
      number: 2,
      time: ''
    }
    const wrapper = shallow(<Card key={mockData.id} date={mockData.date} id={mockData.id} name={mockData.name} number={mockData.number} time={mockData.time}/>)
    expect(wrapper).toMatchSnapshot()
  });
})