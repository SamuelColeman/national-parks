import { parkInfo } from '../reducers/parkInfo';

describe('parkInfo', () => {
	it('should return the initial state', () => {
		const expected = [];

		const result = parkInfo([], {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = [{
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
		};
		const result = parkInfo([{
	    	description: "Biggest visitor center ever.",
				directionsInfo: "Take a left.",
				directionsUrl: "https://www.exampledirections.com",
				id: "11",
				latLong: "{lat:35, lng:83}",
				name: "Visitor Center",
				parkCode: "pant",
				url: "https://www.examplecenter.com"
			}], expectedAction);

		expect(result).toEqual(expected);
	});
});