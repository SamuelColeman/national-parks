import React from 'react';
import { shallow } from 'enzyme';
import { InfoCard, mapStateToProps } from './InfoCard';

describe('InfoCard', () => {
	
	let wrapper;
	let mockCenterInfo = [{
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

	beforeEach(() => {
    wrapper = shallow(<InfoCard info={mockCenterInfo} infoName={mockInfoName}/>)
 	})

  it('should match snapshot with VisitorCenters passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with Events passing through', () => {
  	mockInfoName = 'Events';
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with Alerts passing through', () => {
  	mockInfoName = 'Alerts';
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with Campgrounds passing through', () => {
  	mockInfoName = 'Campgrounds';
    expect(wrapper).toMatchSnapshot();
  });

  it('map state to props gives the info name in state', () => {
		const mockState = { infoName: 'VisitorCenters'};

		const expected = {
			infoName: mockState.infoName
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});
});