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
	let mockIsLoading = jest.fn();
	let mockGetParks = jest.fn();

	fetchParks.mockImplementation(() => {
        return Promise.resolve(mockParks);
      }); 
  fetchParkInfo.mockImplementation(() => {
        return Promise.resolve(mockParkInfo)
      })

	beforeEach(() => {
    wrapper = shallow(<App parks={mockParks} isLoading={mockIsLoading} getParks={mockGetParks} infoName={mockInfoName}/>)
 	})

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call isLoading when submitState is invoked', async () => {
  	wrapper.instance().submitState(mockState);
  	expect(mockIsLoading).toHaveBeenCalledWith(true);
  	expect(fetchParks).toHaveBeenCalledWith(mockState);
  })
});