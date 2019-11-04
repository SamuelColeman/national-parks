import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

import { fetchParks, fetchParkInfo } from '../../apiCalls';


jest.mock('../../apiCalls');

describe('App', () => {

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
	let mockState = 'TN';
	let mockParkCode = 'pant';
	let mockIsLoading = jest.fn();
	let mockHasError = jest.fn();
	let mockGetParks = jest.fn();
	let mockGetInfoName = jest.fn();
	let mockGetInfo = jest.fn();
	let mockError = {error: {message: 'Failed to fetch'}};
	let mockEvent = {target: {name: mockInfoName}};

	fetchParks.mockImplementation(() => {
        return Promise.resolve(mockParks);
      }); 
  fetchParkInfo.mockImplementation(() => {
        return Promise.resolve(mockParkInfo)
      })

	beforeEach(() => {
    wrapper = shallow(<App parks={mockParks} getInfoName={mockGetInfoName} getInfo={mockGetInfo} isLoading={mockIsLoading} hasError={mockHasError} getParks={mockGetParks} infoName={mockInfoName}/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call actions when submitState is invoked', async () => {
  	wrapper.instance().submitState(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(true);
  	await expect(fetchParks).toHaveBeenCalledWith(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(false);
  	expect(mockGetParks).toHaveBeenCalledWith(mockParks);
  	expect(mockHasError).toHaveBeenCalledWith('');
  });

  it('should call hasError when submitState is invoked and no parks are fetched', async () => {
  	mockParks = [];
  	wrapper.instance().submitState(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(true);
  	await expect(fetchParks).toHaveBeenCalledWith(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(false);
  	expect(mockHasError).toHaveBeenCalledWith('Invalid State');
  });

  it('should return an error when submitState is invoked and if fetchParks fails', async () => {
		fetchParks.mockImplementation(() => {
			return Promise.reject(mockError)
		})
		wrapper.instance().submitState(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(true);
  	await expect(fetchParks).toHaveBeenCalledWith(mockState);
  	expect(mockHasError).toHaveBeenCalledWith(mockError.message);
		expect(fetchParks(mockState)).rejects.toEqual(mockError);
	});

	it('should invoke actions and fetchParkInfo when displayParkInfo is invoked', async () => {
		wrapper.instance().displayParkInfo(mockParkCode, mockEvent);
		expect(mockGetInfoName).toHaveBeenCalledWith(mockEvent.target.name);
		await expect(fetchParkInfo).toHaveBeenCalledWith(mockParkCode, mockEvent.target.name);
		expect(mockGetInfo).toHaveBeenCalledWith(mockParkInfo);
	});

	it('should invoke hasError when displayParkInfo is invoked and fetch fails', async () => {
		fetchParkInfo.mockImplementation(() => {
			return Promise.reject(mockError)
		});
		await expect(fetchParkInfo).toHaveBeenCalledWith(mockParkCode, mockEvent.target.name);
		expect(mockHasError).toHaveBeenCalledWith(mockError.message);
		expect(fetchParks(mockState)).rejects.toEqual(mockError);
	});

	it('should invoke getParks with the filtered parks', () => {
		mockEvent = {target: {value: mockState}};
		wrapper.instance().handleSearch(mockEvent);
		expect(mockGetParks).toHaveBeenCalledWith(mockParks);
	})

  it('map state to props gives the parks array in state', () => {
		const mockState = { parks: mockParks};

		const expected = {
			parks: mockState.parks
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
});