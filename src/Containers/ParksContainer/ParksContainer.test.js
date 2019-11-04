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

  it('should match snapshot with correct data passing through', () => {
  	mockLoading = true;
    expect(wrapper).toMatchSnapshot();
  });

  it('should call submitState when all button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(mockSubmitState).toHaveBeenCalledWith(mockSelectedState);
    });

  it('should call handleSearch when search input field is changed', () => {
  	const mockEvent = {target: {value: 'TN'}};

    wrapper.find('input').simulate('change', mockEvent);

    expect(mockHandleSearch).toHaveBeenCalledWith(mockEvent);
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

	it('map state to props gives the loading in state', () => {
		const mockState = { loading: mockLoading};

		const expected = {
			loading: mockState.loading
		};

		const mappedState = mapStateToProps(mockState);

		expect(mappedState).toEqual(expected);
	});
});