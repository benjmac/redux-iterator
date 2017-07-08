const reduxIterator = ({dispatch}) => next => action => {
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
      if (typeof action[key] === 'object' && action[key] !== null) {
        dispatch(action[key]);
      }
    }
  }
  else {
    next(action);
  }
}

module.exports = reduxIterator;
