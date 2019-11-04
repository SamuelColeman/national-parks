import { parkId } from '../reducers/parkId';

describe('parkId', () => {
	it('should return the initial state', () => {
		const expected = '';

		const result = parkId('', {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = '5D';
		const expectedAction = {
    	type: 'GET_PARK_ID',
    	parkId: '5D' 
    };

		const result = parkId('5D', expectedAction);

		expect(result).toEqual(expected);
	});
});