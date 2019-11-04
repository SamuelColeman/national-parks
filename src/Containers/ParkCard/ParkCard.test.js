import React from 'react';
import { shallow } from 'enzyme';
import { ParkCard, mapStateToProps } from './ParkCard';

describe('ParkCard', () => {
	
	let wrapper;
	let mockPark = { 
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
		};
		let mockPage = false;
		let mockDisplayParkInfo = jest.fn();

	beforeEach(() => {
    wrapper = shallow(<ParkCard
    	{...mockPark} 
    	page={mockPage}
    	displayParkInfo={mockDisplayParkInfo}
    	/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});