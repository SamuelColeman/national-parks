import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of HAS_ERROR', () => {
    const errorMsg = 'Invalid State';
    const expectedAction = {
    	type: 'HAS_ERROR',
    	errorMsg: 'Invalid State'
    }

    const result = actions.hasError(errorMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_PARKS', () => {
    const parks = [{ 
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
    const expectedAction = {
    	type: 'GET_PARKS',
    	parks: [{ 
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
			}]
    }

    const result = actions.getParks(parks);

    expect(result).toEqual(expectedAction);
  });

   it('should have a type of SELECT_STATE', () => {
    const selectedState = 'TN';
    const expectedAction = {
    	type: 'SELECT_STATE',
    	selectedState: 'TN'
    }

    const result = actions.selectState(selectedState);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_INFO', () => {
    const parkInfo = [{
    	description: "Biggest visitor center ever.",
			directionsInfo: "Take a left.",
			directionsUrl: "https://www.exampledirections.com",
			id: "11",
			latLong: "{lat:35, lng:83}",
			name: "Visitor Center",
			parkCode: "pant",
			url: "https://www.examplecenter.com"
		}];
    const expectedAction = {
    	type: 'GET_INFO',
    	parkInfo: [{
	    	description: "Biggest visitor center ever.",
				directionsInfo: "Take a left.",
				directionsUrl: "https://www.exampledirections.com",
				id: "11",
				latLong: "{lat:35, lng:83}",
				name: "Visitor Center",
				parkCode: "pant",
				url: "https://www.examplecenter.com"
			}]
    }

    const result = actions.getInfo(parkInfo);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_INFO_NAME', () => {
    const infoName = 'VisitorCenters';
    const expectedAction = {
    	type: 'GET_INFO_NAME',
    	infoName: 'VisitorCenters'
    }

    const result = actions.getInfoName(infoName);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_PARK_ID', () => {
    const parkId = '5';
    const expectedAction = {
    	type: 'GET_PARK_ID',
    	parkId: '5'
    }

    const result = actions.getParkId(parkId);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const loading = false;
    const expectedAction = {
    	type: 'IS_LOADING',
    	loading: false
    }

    const result = actions.isLoading(loading);

    expect(result).toEqual(expectedAction);
  });
});