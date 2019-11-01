import { combineReducers } from 'redux';
import { hasError } from './hasError';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { visitorCenters } from './visitorCenters';

export const rootReducer = combineReducers({
	hasError,
	parks,
	selectedState,
	visitorCenters
})