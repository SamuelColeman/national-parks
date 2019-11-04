import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

import { fetchParks, fetchParkInfo } from '../../apiCalls';


jest.mock('../../apiCalls');

describe('App', () => {
	
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<App />)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});