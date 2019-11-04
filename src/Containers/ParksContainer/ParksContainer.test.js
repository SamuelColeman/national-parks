import React from 'react';
import { shallow } from 'enzyme';
import { ParksContainer, mapStateToProps } from './ParksContainer';

describe('ParksContainer', () => {
	
	let wrapper;
	let mockParks = [{ 
    	description: "Historic Site",
			designation: "National Historic Site",
			directionsInfo: "Drive Car",
			directionsUrl: "http://www.directions.com",
			fullName: "National Historic Site",
			id: "2",
			latLong: "lat:36, long:82",
			name: "Historic Park",
			parkCode: "pant",
			states: "ZN",
			url: "https://www.example.com",
			weatherInfo: "Sunny"
		}];
		let mockSelectedState = 'ZN';
		let mockParkId = '5D';
		let mockDisplayParkInfo = jest.fn();
		let mockHandleSearch = jest.fn();
		let mockErrorMsg = 'Invalid State';
		let mockLoading = false;
		let mockSubmitState = jest.fn();

	beforeEach(() => {
    wrapper = shallow(<ParksContainer 
    	parks={mockParks}
    	selectedState={mockSelectedState}
    	displayParkInfo={mockDisplayParkInfo}
    	handleSearch={mockHandleSearch}
    	errorMsg={mockErrorMsg}
    	loading={mockLoading}
    	submitState={mockSubmitState}
    	/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});