import React from 'react';
import { shallow } from 'enzyme';
import { ParkCard, mapStateToProps, mapDispatchToProps } from './ParkCard';
import { getParkId } from '../../actions';

describe('ParkCard', () => {
	
	let wrapper;
	let mockPark = { 
    	description: "Historic Site",
			designation: "National Historic Site",
			directionsInfo: "Drive Car",
			directionsUrl: "http://www.directions.com",
			fullName: "National Historic Site",
			id: "2E",
			latLong: "lat:36, long:82",
			name: "Historic Park",
			parkCode: "pant",
			states: "ZN",
			url: "https://www.example.com",
			weatherInfo: "Sunny"
		};
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
	let mockInfoName = 'VisitorCenters'
	let mockParks = [mockPark]
	let mockPage = false;
	let mockDisplayParkInfo = jest.fn();
	let mockGetParkId = jest.fn();

	beforeEach(() => {
    wrapper = shallow(<ParkCard
    	{...mockPark} 
    	page={mockPage}
    	getParkId={mockGetParkId}
    	displayParkInfo={mockDisplayParkInfo}
    	/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with correct data passing through', () => {
  	mockPage = true;
    expect(wrapper).toMatchSnapshot();
  });

  it('map state to props gives the parks array in state', () => {
		const mockState = { parks: mockParks};

		const expected = {
			parks: mockState.parks
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});

	it('map state to props gives the park info array in state', () => {
		const mockState = { parkInfo: mockParkInfo};

		const expected = {
			parkInfo: mockState.parkInfo
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});

	it('map state to props gives the info name in state', () => {
		const mockState = { infoName: mockInfoName};

		const expected = {
			infoName: mockState.infoName
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});

	it('map state to props gives the park id in state', () => {
		const mockState = { parkId: mockPark.id};

		const expected = {
			parkId: mockState.parkId
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});

	it('should call displayParkInfo when section is clicked', () => {
  	const mockEvent = {target: {name: mockInfoName}};

    wrapper.find('section').at(1).simulate('click', mockEvent);

    expect(mockDisplayParkInfo).toHaveBeenCalledWith(mockPark.parkCode, mockEvent);
    mockPage = false;
   });

	it('calls dispatch with getParkId action when Link is clicked', () => {
      wrapper.find('Link').simulate('click');

      expect(mockGetParkId).toHaveBeenCalledWith(mockPark.id);
    });
});