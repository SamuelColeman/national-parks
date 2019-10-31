import { combineReducers } from 'redux';
import { hasError } from './hasError';
import { parks } from './parks';

export const rootReducer = combineReducers({
	hasError,
	parks
})