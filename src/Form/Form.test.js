import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('Should update state when handleChange is called', () => {
    let mockfn = jest.fn()
    let mockEvent = {
      preventDefault: mockfn,
      name: 'name',
      value: 'Roger'
    }
    let wrapper = shallow(<Form  sumbitReservation={mockfn}/>)
    // wrapper.handleChange(mockEvent)
    // expect(wrapper.state.name).toEqual('Roger')
   });
})