const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-spies'));
const expect = chai.expect;

const reduxIterator = require('../src/index');

// import lodash for deep equal of objects
// _.isEqual(object, other);

const createAction = (type, data) => {
  return {
    type,
    data,
  }
}


describe('Testing Tests', function () {

  const obj = { 'test': 1 }

  describe('testing obj', function () {

    it('Test obj.test value', function () {
      expect(obj.test).to.equal(1);
    });

  });

  describe('testing reduxIterator', function () {

    it('Confirm it is a function', function () {
      assert.typeOf(reduxIterator, 'function');
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

  describe('Testing the hooks console.logs', function () {

  const testObj = {}

  afterEach(function () {
    console.log('afterEach run outter!');
  });

  beforeEach(function () {
    console.log('before run outter!');
  });

  describe('in some nested contexts', function () {
    // before(function () {
    //   console.log('nested before run!');
    // });

    it('runs after this block', function () {
      // console.log('nested it run!');
      testObj.num = 1
      console.log(testObj);

    });

    it('runs again after this block', function () {
      testObj.num +=1
      console.log(testObj)
    });
  });
});

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
