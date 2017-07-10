import { createStore, applyMiddleware } from 'redux';

import reduxIterator from '../src/index';

/* Action Types */
export const UPDATE_NUM1 = 'UPDATE_NUM1';
export const UPDATE_NUM2 = 'UPDATE_NUM2';
export const UPDATE_NUM3 = 'UPDATE_NUM3';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const RESET_STATE = 'RESET_STATE';
export const UPDATE_NAME = 'UPDATE_NAME';

/* Action Creators */


/* Initial State */
export const initialState = {
  num1: 0,
  num2: 0,
  num3: 0,
  name: '',
  arr: [],
};

/* Reducer Function */
const testReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case UPDATE_NUM1:
        newState.num1 = action.data
        break;

    case UPDATE_NUM2:
        newState.num2 = action.data
        break;

    case UPDATE_NUM3:
        newState.num3 = action.data
        break;

    case UPDATE_ARRAY:
        newState.arr = action.data
        break;

    case RESET_STATE:
        newState = initialState;
        break;

    case UPDATE_NAME:
        newState.name = action.data
        break;

    default:
        return newState;
  }
  return newState;
}

//store created
const store = createStore(
  testReducer,
  applyMiddleware(
    reduxIterator
  )
);

export default store;
