import { selectedState } from '../reducers/selectedState';

describe('selectedState', () => {
	it('should return the initial state', () => {
		const expected = '';

		const result = selectedState('', {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = 'TN';
		const expectedAction = {
    	type: 'SELECT_STATE',
    	selectedState: 'TN' 
    };

		const result = selectedState('TN', expectedAction);

		expect(result).toEqual(expected);
	});
});