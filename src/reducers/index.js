import { combineReducers } from 'redux';
import { hasError } from './hasError';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { parkInfo } from './parkInfo';

export const rootReducer = combineReducers({
	hasError,
	parks,
	selectedState,
	parkInfo
})