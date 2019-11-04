import { rootReducer } from '../reducers/index';
import { errorMsg } from './errorMsg';
import { parks } from './parks';
import { selectedState } from './selectedState';
import { parkInfo } from './parkInfo';
import { infoName } from './infoName';
import { parkId } from './parkId';
import { loading } from './loading';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  it('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      errorMsg: '',
      parks: [],
      selectedState: '',
      parkInfo: [],
      infoName: 'error',
      parkId: '',
      loading: false
    });
  });

  it('should contain errorMsg logic', () => {
    expect(store.getState().errorMsg).toEqual(errorMsg(undefined, { type: null }));
  });

  it('should contain parks logic', () => {
    expect(store.getState().parks).toEqual(parks(undefined, { type: null }));
  });

  it('should contain selectedState logic', () => {
    expect(store.getState().selectedState).toEqual(selectedState(undefined, { type: null }));
  });

  it('should contain parkInfo logic', () => {
    expect(store.getState().parkInfo).toEqual(parkInfo(undefined, { type: null }));
  });

  it('should contain infoName logic', () => {
    expect(store.getState().infoName).toEqual(infoName(undefined, { type: null }));
  });

  it('should contain parkId logic', () => {
    expect(store.getState().parkId).toEqual(parkId(undefined, { type: null }));
  });

  it('should contain loading logic', () => {
    expect(store.getState().loading).toEqual(loading(undefined, { type: null }));
  });

});