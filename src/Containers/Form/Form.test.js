import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { hasError, getParks, selectState, isLoading } from '../../actions';
import { Link } from 'react-router-dom';

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
	let mockSelectedState = 'TN';
	let mockErrorMsg = 'Invalid State';
	let mockSubmitState = jest.fn();
	let mockSelectState = jest.fn();
	let mockHasError = jest.fn();
	let mockEvent = {target: {value: mockSelectedState}};

	beforeEach(() => {
    wrapper = shallow(<Form selectState={mockSelectState} submitState={mockSubmitState} hasError={mockHasError}/>)
 	});

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke actions when handleChange is called and update local state', () => {
  	wrapper.instance().handleChange(mockEvent);
  	expect(mockSelectState).toHaveBeenCalledWith(mockEvent.target.value);
  	expect(wrapper.state('ConditionalLink')).toEqual(Link);
  	expect(mockHasError).toHaveBeenCalledWith('');
  });

  it('should call handleChange when state input is changed', () => {
  	wrapper.instance().handleChange = jest.fn();
  	wrapper.instance().forceUpdate();
  	wrapper.find('input').simulate('change', mockEvent);

  	expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  })

  it('should call submitState when submit button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockSubmitState).toHaveBeenCalled();
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