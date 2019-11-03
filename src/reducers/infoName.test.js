import { infoName } from '../reducers/infoName';

describe('infoName', () => {
	it('should return the initial state', () => {
		const expected = 'error';

		const result = infoName('error', {});

		expect(result).toEqual(expected);
	});

	it('should return the state', () => {
		const expected = 'VisitorCenters';
		const expectedAction = {
    	type: 'GET_INFO_NAME',
    	infoName: 'VisitorCenters' 
    };

		const result = infoName('', expectedAction);

		expect(result).toEqual(expected);
	});
});