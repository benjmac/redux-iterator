// import configureMockStore from 'redux-mock-store'
// import nock from 'nock'
const store = require('./store.js')
const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-spies'));
const expect = chai.expect;

const reduxIterator = require('../src/index');



describe('redux-iterator', () => {

  const RESET_STATE = 'RESET_STATE';
  const UPDATE_NUM1 = 'UPDATE_NUM1';
  const UPDATE_NUM2 = 'UPDATE_NUM2';
  const UPDATE_NUM3 = 'UPDATE_NUM3';
  const UPDATE_ARRAY = 'UPDATE_ARRAY';
  const createAction = (type, data) => {
    return {
      type,
      data,
    }
  }

  describe('testing reduxIterator', () => {

    it('Confirm it is a function', () => {
      assert.typeOf(reduxIterator, 'function');
      assert.strictEqual(reduxIterator.length, 1);
    });

  });

  describe('deep equal test', () => {
    const obj1 = {
      name: "Ben",
      siblings: ["Bob", "Tom"]
    }
    const obj2 = {
      name: "Ben",
      siblings: ["Bob", "Tom"]
    }

    const obj3 = {
      name: "Ben",
      siblings: ["Tara", "Nancy"]
    }

    it('see if this thing even works, returns true', () => {
      assert.deepEqual(obj1, obj2);
    });

    it('see if this thing even works, returns false', () => {
      assert.notDeepEqual(obj1, obj3);
    });

  });

  describe('Test State', () => {

    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('get stores state', () => {
      console.log(store.getState());
    });

    it('updateNum1', () => {
      store.dispatch(createAction(UPDATE_NUM1, 59));
      console.log(store.getState());
    });

    it('get stores state', () => {
      console.log('is store clear?', store.getState());
    });


  });

  describe('Array Test', () => {

    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('dispatches array', () => {
      const desiredState = {
        num1: 78,
        num2: 44,
        num3: 34,
        name: '',
        arr: [],
      };
      let test = [];
      test.push(createAction(UPDATE_NUM1, 78), createAction(UPDATE_NUM2, 44), createAction(UPDATE_NUM3, 34));
      store.dispatch(test);
      assert.deepEqual(store.getState(), desiredState);
    });

    it('nested arrays', () => {
      const desiredState = {
        num1: 55,
        num2: 12,
        num3: 66,
        name: '',
        arr: ['hello world'],
      };
      let test = [];
      test.push([createAction(UPDATE_NUM1, 55), createAction(UPDATE_NUM2, 12)],createAction(UPDATE_NUM3, 66), createAction(UPDATE_ARRAY, ['hello world']));
      store.dispatch(test);
      assert.deepEqual(store.getState(), desiredState);
    });

  });


  //closing bracket for
});

// A test for a Map

// A test for a Set

// A test for an Array

// A test for a standard Object

// A test for a generator

// Some tests to try to make it break?
// if don't invoke generator?

// Can address nested items

//then updated state...
