const reduxIterator = ({ dispatch }) => next => action => {
  if (action[Symbol.iterator] && typeof action !== 'string') {
    if (action instanceof Map) {
      //map
      for (let elem of action) {
        dispatch(elem[1])
      }
    }
    else {
      for (let elem of action) {
        //set or array
        dispatch(elem)
      }
    }
  }
  else if (typeof action === 'object' && action !== null && !action.type) {
    //standard obj
    for (let key in action) {
      if (typeof action[key] === 'object' && action[key] !== null) {
        dispatch(action[key]);
      }
    }
  }

  else if (typeof action === 'function' && action.prototype.toString().slice(8, -1) === 'Generator') {
    //generator
    for (let elem of action()) {
      dispatch(elem)
    }
  }

  else {
    next(action);
  }
}

module.exports = reduxIterator;

// test.prototype.toString().slice(8,-1) === 'Generator';
