import store, { RESET_STATE, UPDATE_NUM1, UPDATE_NUM2, UPDATE_NUM3, UPDATE_ARRAY, UPDATE_NAME } from './store.js';
import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-spies'));

const reduxIterator = require('../src/index');

describe('redux-iterator', () => {

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

      let arrTest = [];
      arrTest.push(createAction(UPDATE_NUM1, 78), createAction(UPDATE_NUM2, 44), createAction(UPDATE_NUM3, 34));
      store.dispatch(arrTest);
      assert.deepEqual(store.getState(), desiredState);
    });

    it('dispatches array with nested array', () => {
      const desiredState = {
        num1: 55,
        num2: 12,
        num3: 66,
        name: '',
        arr: ['hello world'],
      };

      const arrTest = [];
      arrTest.push([createAction(UPDATE_NUM1, 55), createAction(UPDATE_NUM2, 12)], createAction(UPDATE_NUM3, 66), createAction(UPDATE_ARRAY, ['hello world']));
      store.dispatch(arrTest);
      assert.deepEqual(store.getState(), desiredState);
    });

  });

  describe('Object Test', () => {
    //test the object edge cases here?
    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('dispatches object', () => {
      const desiredState = {
        num1: 10,
        num2: 20,
        num3: 30,
        name: 'Foo-Bar',
        arr: ['Hello', 'World'],
      };

      let objTest = {
        key1: createAction(UPDATE_NUM1, 10),
        key2: createAction(UPDATE_NUM2, 20),
        key3: createAction(UPDATE_NUM3, 30),
        key4: createAction(UPDATE_NAME, 'Foo-Bar'),
        key5: createAction(UPDATE_ARRAY, ['Hello', 'World'])
      }

      store.dispatch(objTest);
      assert.deepEqual(store.getState(), desiredState);
    });

    it('dispatches object with nested elements', () => {
      const desiredState = {
        num1: 9087,
        num2: 34545,
        num3: 958980049,
        name: 'Dios-Mio',
        arr: ['Diego', 'Maradona'],
      };

      let objTest = {
        key1: { 'key': createAction(UPDATE_NUM1, 9087) },
        key2: [[createAction(UPDATE_NUM2, 34545)], { key3: createAction(UPDATE_NUM3, 958980049) }],
        key4: createAction(UPDATE_NAME, 'Dios-Mio'),
        key5: createAction(UPDATE_ARRAY, ['Diego', 'Maradona'])
      }

      store.dispatch(objTest);
      assert.deepEqual(store.getState(), desiredState);
    });

  });

  describe('Map Test', () => {

    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('dispatches map', () => {
      const desiredState = {
        num1: 1,
        num2: 2,
        num3: 3,
        name: '',
        arr: [],
      };

      const mapTest = new Map([['key1', createAction(UPDATE_NUM1, 1)], ['key2', createAction(UPDATE_NUM2, 2)], ['key3', createAction(UPDATE_NUM3, 3)]]);
      store.dispatch(mapTest);
      assert.deepEqual(store.getState(), desiredState);
    });

    it('dispatches map with nested elements(object, array, map)', () => {
      const desiredState = {
        num1: 89,
        num2: 123,
        num3: 123684,
        name: 'Dan',
        arr: [],
      };
      const mapTest = new Map([['key1', { 'test': createAction(UPDATE_NUM1, 89) }], ['key2', [createAction(UPDATE_NUM2, 123)]], ['key3', new Map([['key', createAction(UPDATE_NUM3, 123684)]])], ['key4', createAction(UPDATE_NAME, 'Dan')]]);
      store.dispatch(mapTest);
      assert.deepEqual(store.getState(), desiredState);
    });

  });

  //closing bracket for
});

// A test for a Set

// A test for a generator

// Some tests to try to make it break?
// if don't invoke generator?

// Can address nested items

//then updated state...
