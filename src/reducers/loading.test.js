import { loading } from '../reducers/loading';

describe('loading', () => {
	it('should return the initial state', () => {
		const expected = false;

		const result = loading(false, {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = true;
		const expectedAction = {
    	type: 'IS_LOADING',
    	loading: true 
    };

		const result = loading(true, expectedAction);

		expect(result).toEqual(expected);
	});
});