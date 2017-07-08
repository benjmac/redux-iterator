const chai = require('chai');
chai.use(require('chai-spies'));
const expect = chai.expect;

// import reduxIterator from '../src/index';
// const reduxIterator = require('../src/index');

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

});

// A test for a Map

// A test for a Set

// A test for an Array

// A test for a standard Object

// A test for a generator

// Some tests to try to make it break?
