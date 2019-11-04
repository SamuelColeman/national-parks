import React from 'react';
import { shallow } from 'enzyme';
import { InfoContainer, mapStateToProps } from './InfoContainer';

describe('InfoContainer', () => {
	
	let wrapper;
	let mockParkInfo = [{
    	description: "Biggest visitor center ever.",
			directionsInfo: "Take a left.",
			directionsUrl: "https://www.exampledirections.com",
			id: "11",
			latLong: "{lat:35, lng:83}",
			name: "Visitor Center",
			parkCode: "pant",
			url: "https://www.examplecenter.com"
		}];
		let mockInfoName = 'VisitorCenters';
		let mockParkId = '5D';

	beforeEach(() => {
    wrapper = shallow(<InfoContainer parkInfo={mockParkInfo}
    	infoName={mockInfoName}
    	parkId={mockParkId}
    	/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});