import { fetchParks, fetchParkInfo } from './apiCalls';

describe('fetchParks', () => {

	let mockParks;
	let mockState = 'ZN';

  beforeEach(() => {
    mockParks = [{ 
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

    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockParks)
        })
      })
    })

	it('should fetch parks with the correct URL', () => {
		fetchParks(mockState);

		expect(window.fetch).toHaveBeenCalledWith('https://developer.nps.gov/api/v1/parks?stateCode=ZN&api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E')
	});

	it('should return an array of parks when fetchParks is called (HAPPY)', () => {
		expect(fetchParks(mockState)).resolves.toEqual(mockParks);
	});

	it('should return an error if fetchParks property ok is false (SAD)', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			})
		})
		expect(fetchParks(mockState)).rejects.toEqual(TypeError('response.json is not a function'))
	});

	it('should return an error if fetchParks fails ', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Failed to fetch'))
    });
    expect(fetchParks(mockState)).rejects.toEqual(Error('Failed to fetch'));
    }); 
});

describe('fetchParkInfo', () => {

	let mockParkInfo;
	let mockInfoName = 'VisitorCenters';
	let mockParkCode = 'pant';

	beforeEach(() => { 
		mockParkInfo = [{
    	description: "Biggest visitor center ever.",
			directionsInfo: "Take a left.",
			directionsUrl: "https://www.exampledirections.com",
			id: "11",
			latLong: "{lat:35, lng:83}",
			name: "Visitor Center",
			parkCode: "pant",
			url: "https://www.examplecenter.com"
		}];

		window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockParkInfo)
      })
    })
	});

	it('should fetch park info with the correct URL', () => {
		fetchParkInfo(mockParkCode, mockInfoName);

		expect(window.fetch).toHaveBeenCalledWith('https://developer.nps.gov/api/v1/VisitorCenters?parkCode=pant&api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E')
	});

	it('should return an array of information when fetchParkInfo is called (HAPPY)', () => {
		expect(fetchParkInfo(mockParkCode, mockInfoName)).resolves.toEqual(mockParkInfo);
	});

	it('should return an error if fetchParkInfo property ok is false (SAD)', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			})
		})
		expect(fetchParkInfo(mockParkCode, mockInfoName)).rejects.toEqual(TypeError('response.json is not a function'))
	});

	it('should return an error if fetchParkInfo fails ', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Failed to fetch'))
    });
    expect(fetchParkInfo(mockParkCode, mockInfoName)).rejects.toEqual(Error('Failed to fetch'));
  });
});