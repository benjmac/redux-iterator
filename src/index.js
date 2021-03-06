const reduxIterator = ({ dispatch }) => next => action => {
  if (action[Symbol.iterator] && typeof action !== 'string') {
    if (action instanceof Map) {
      for (let elem of action) {
        dispatch(elem[1])
      }
    }
    else {
      for (let elem of action) {
        dispatch(elem)
      }
    }
  }
  else if (typeof action === 'object' && action !== null && !action.type) {
    for (let key in action) {
      if (action[key] !== null) {
        dispatch(action[key]);
      }
    }
  }
  else if (typeof action === 'function' && action.prototype.toString().slice(8, -1) === 'Generator') {
    for (let elem of action()) {
      dispatch(elem)
    }
  }
  else {
    next(action);
  }
}

export default reduxIterator;
