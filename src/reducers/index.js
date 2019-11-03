import { combineReducers } from 'redux';
import { errorMsg } from './errorMsg';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { parkInfo } from './parkInfo';
import { infoName } from './infoName';

export const rootReducer = combineReducers({
	errorMsg,
	parks,
	selectedState,
	parkInfo,
	infoName
})