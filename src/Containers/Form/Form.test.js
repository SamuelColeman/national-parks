import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps } from './Form';

describe('Form', () => {
	
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<Form />)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});