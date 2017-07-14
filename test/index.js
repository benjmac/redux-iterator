import store, { RESET_STATE, UPDATE_NUM1, UPDATE_NUM2, UPDATE_NUM3, UPDATE_ARRAY, UPDATE_NAME, initialState } from './store.js';
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

  describe('Testing reduxIterator is function', () => {

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

    it('dispatches object with null value, not dispatched to store by redux-iterator', () => {

      store.dispatch({ 'test': null });
      assert.deepEqual(store.getState(), initialState);
    });

    it('dispatches null and returns error, as is not an object', () => {

      try {
        store.dispatch(null);
      } catch (err) {
        expect(err).to.be.an('error');
      }
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

  describe('Set Test', () => {

    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('dispatches set', () => {
      const desiredState = {
        num1: 1234,
        num2: 5678,
        num3: 9101112,
        name: '',
        arr: [],
      };

      const testSet = new Set();
      testSet.add(createAction(UPDATE_NUM1, 1234))
        .add(createAction(UPDATE_NUM2, 5678))
        .add(createAction(UPDATE_NUM3, 9101112));
      store.dispatch(testSet);
      assert.deepEqual(store.getState(), desiredState);
    });

    it('dispatches set with nested items', () => {
      const desiredState = {
        num1: 281,
        num2: 330,
        num3: 8004,
        name: 'Mr. Jones',
        arr: ['Nested', 'Fun'],
      };

      const testSet = new Set();
      testSet.add({ 'key': createAction(UPDATE_NUM1, 281) })
        .add([createAction(UPDATE_NUM2, 330)])
        .add(new Map([['key1', createAction(UPDATE_NUM3, 8004)]]))
        .add(new Set([createAction(UPDATE_NAME, 'Mr. Jones')]))
        .add(createAction(UPDATE_ARRAY, ['Nested', 'Fun']));
      store.dispatch(testSet);
      assert.deepEqual(store.getState(), desiredState);
    });
  });

  describe('Generator Test', () => {

    afterEach('set store to initial state', () => store.dispatch(createAction(RESET_STATE)));

    it('dispatches generator', () => {
      const desiredState = {
        num1: 1,
        num2: 2,
        num3: 3,
        name: '',
        arr: [],
      };

      function* test() {
        yield createAction(UPDATE_NUM1, 1);
        yield createAction(UPDATE_NUM2, 2);
        yield createAction(UPDATE_NUM3, 3);
      }

      store.dispatch(test);
      assert.deepEqual(store.getState(), desiredState);
    });

    xit('dispatches generator without invoking throws error', () => {
      const desiredState = {
        num1: 5,
        num2: 6,
        num3: 7,
        name: '',
        arr: [],
      };

      function* test() {
        yield createAction(UPDATE_NUM1, 1);
        yield createAction(UPDATE_NUM2, 2);
        yield createAction(UPDATE_NUM3, 3);
      }

      try {
        store.dispatch(test);
      } catch (err) {
        console.log(err);
        expect(err).to.be.an('error');
      }
    });

    it('dispatches generator with nested items', () => {
      const desiredState = {
        num1: 7,
        num2: 8,
        num3: 9,
        name: 'Foo',
        arr: ['Bar'],
      };

      function* test() {
        yield new Set([createAction(UPDATE_NUM1, 7)]);
        yield { 'test': createAction(UPDATE_NUM2, 8) };
        yield [createAction(UPDATE_NUM3, 9)];
        yield [{ 'test': new Map([['key1', createAction(UPDATE_NAME, 'Foo')]]) }];
        yield createAction(UPDATE_ARRAY, ['Bar']);
      }

      store.dispatch(test);
      assert.deepEqual(store.getState(), desiredState);
    });

  });

  //closing bracket for
});

// Some tests to try to make it break?
// if don't invoke generator?

// Can address nested items
//then updated state
