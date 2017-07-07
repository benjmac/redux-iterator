import chai from 'chai';
import reduxIterator from '../src/index';
// import lodash for deep equal of objects
// _.isEqual(object, other);

const createAction = (type, data) => {
  return {
    type,
    data,
  }
}

console.log(reduxIterator);


// A test for a Map

// A test for a Set

// A test for an Array

// A test for a standard Object

// A test for a generator

// Some tests to try to make it break?
