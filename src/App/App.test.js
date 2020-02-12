import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });
  it('Should update state when submitReservation is called', () => {
    const wrapper = shallow(<App />)
  })
})
