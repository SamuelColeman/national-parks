import React from 'react';
import { shallow } from 'enzyme';
import { InfoCard, mapStateToProps } from './InfoCard';

describe('InfoCard', () => {
	
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<InfoCard />)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});