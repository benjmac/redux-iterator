// import { createStore, applyMiddleware } from 'redux';
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxIterator = require('../src/index');

/* Action Types */
const UPDATE_NUM1 = 'UPDATE_NUM1';
const UPDATE_NUM2 = 'UPDATE_NUM2';
const UPDATE_NUM3 = 'UPDATE_NUM3';
const RESET_STATE = 'RESET_STATE';

/* Action Creators */
// const updateNum1 = (num) => ({
//   type: UPDATE_NUM1,
//   num
// });

// const updateNum2 = (num) => ({
//   type: UPDATE_NUM2,
//   num
// });

// const updateNum3 = (num) => ({
//   type: UPDATE_NUM3,
//   num
// });


/* Initial State */
const initialState = {
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

    case RESET_STATE:
        newState = initialState;
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

module.exports = store;
