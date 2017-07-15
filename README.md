# redux-iterator

### About
Redux Iterator [middleware](https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md) is capable of receiving Sets, Maps, Arrays, Objects and Generators. Once the middleware is reached, they’re iterated over and the nested actions are dispatched to the Redux store.

Redux Iterator works seamlessly along side other middleware for Thunks and Promises. It makes the process of dispatching to the store cleaner by allowing you to group actions into one item/ location.

**TEST** and **moreTest** this repository.

Redux Iterator tests look like

```
One code sample
```

More descriptions

```
second code example
```


Some code examples

```js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

Test Test

## Installation

```
npm install --save redux-iterator
```

Then, to enable Redux Iterator, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from 'redux';
import iterator from 'redux-iterator';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
// With thunk middleware, iterator must go first!
const store = createStore(
  rootReducer,
  applyMiddleware(iterator, thunk)
);
```

## License

ISC
