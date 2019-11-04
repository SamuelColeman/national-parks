import { errorMsg } from '../reducers/errorMsg';

describe('errorMsg', () => {
	it('should return the initial state', () => {
		const expected = '';

		const result = errorMsg('', {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = 'Invalid State';
		const expectedAction = {
    	type: 'HAS_ERROR',
    	errorMsg: 'Invalid State' 
    };

		const result = errorMsg('', expectedAction);

		expect(result).toEqual(expected);
	});
});