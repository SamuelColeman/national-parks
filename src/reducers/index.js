import { combineReducers } from 'redux';
import { errorMsg } from './errorMsg';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { parkInfo } from './parkInfo';
import { infoName } from './infoName';
import { parkId } from './parkId';

export const rootReducer = combineReducers({
	errorMsg,
	parks,
	selectedState,
	parkInfo,
	infoName,
	parkId
})