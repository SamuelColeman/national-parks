import { parks } from '../reducers/parks';

describe('parks', () => {
	it('should return the initial state', () => {
		const expected = [];

		const result = parks([], {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = [{ 
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
		};
		const result = parks([{ 
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
		}], expectedAction);

		expect(result).toEqual(expected);
	});
});