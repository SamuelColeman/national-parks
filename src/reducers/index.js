import { combineReducers } from 'redux';
import { hasError } from './hasError';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { parkInfo } from './parkInfo';
import { infoName } from './infoName';

export const rootReducer = combineReducers({
	hasError,
	parks,
	selectedState,
	parkInfo,
	infoName
})