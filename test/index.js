// import configureMockStore from 'redux-mock-store'
// import nock from 'nock'
const store = require('./store.js')
const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-spies'));
const expect = chai.expect;

const reduxIterator = require('../src/index');



describe('redux-iterator', function () {

  const obj = { 'test': 1 }
  const UPDATE_NUM1 = 'UPDATE_NUM1';
  const UPDATE_NUM2 = 'UPDATE_NUM2';
  const UPDATE_NUM3 = 'UPDATE_NUM3';
  const createAction = (type, data) => {
    return {
      type,
      data,
    }
  }

  describe('testing reduxIterator', function () {

    it('Confirm it is a function', function () {
      assert.typeOf(reduxIterator, 'function');
      assert.strictEqual(reduxIterator.length, 1);
    });

  });

  describe('testing obj', function () {

    it('Test obj.test value', function () {
      expect(obj.test).to.equal(1);
    });

  });


  describe('deep equal test', function () {
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

    it('see if this thing even works, returns true', function () {
      assert.deepEqual(obj1, obj2);
    });

    it('see if this thing even works, returns false', function () {
      assert.notDeepEqual(obj1, obj3);
    });

  });

  describe('Test State', function () {

    // after()

    it('get stores state', function () {
      console.log(store.getState());
    });

    it('updateNum1', function () {
      store.dispatch(createAction(UPDATE_NUM1, 59));
      console.log(store.getState());
    });

  });

  describe('Array Test', function () {

    it('get stores state', function () {
      let test = []
      test.push(createAction(UPDATE_NUM1, 78))
      test.push(createAction(UPDATE_NUM2, 44))
      test.push(createAction(UPDATE_NUM3, 34))
      store.dispatch(test);
      console.log(store.getState());
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
