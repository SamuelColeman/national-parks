import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps } from './Form';

describe('Form', () => {
	
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
			states: "TN",
			url: "https://www.example.com",
			weatherInfo: "Sunny"
	}];
	let mockSelectedState = 'ZN';
	let mockErrorMsg = 'Invalid State';

	beforeEach(() => {
    wrapper = shallow(<Form />)
 	})

  it('should match snapshot with correct data passing through', () => {
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

	it('map state to props gives the selected state in state', () => {
		const mockState = { selectedState: mockSelectedState};

		const expected = {
			selectedState: mockState.selectedState
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});

	it('map state to props gives the error message in state', () => {
		const mockState = { errorMsg: mockErrorMsg};

		const expected = {
			errorMsg: mockState.errorMsg
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});
});