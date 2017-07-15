# redux-iterator

## About
Redux Iterator [middleware](https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md) is capable of receiving Sets, Maps, Arrays, Objects and Generators. Once the middleware is reached, they’re iterated over and the nested actions are dispatched to the Redux store.

Redux Iterator works seamlessly along side other middleware for Thunks and Promises. It makes the process of dispatching to the store cleaner by allowing you to group actions into one item/ location.

## Why use Redux Iterator?

It makes updating the state easier and cleaner than before. No longer do there need to be multiple dispatches for various action creators. It can all be done within one.

Below is a simple example of what can be done. Obviously you can come up with many ways to take advantage of Sets, Maps, Arrays, Objects and Generators. Which all now are capable of being sent to the Redux store.

```js
const NAME = 'NAME';
const AGE = 'AGE';

const updateName = (name) => {
  return {
    type: NAME
    name,
  };
}

const updateAge = (age) => {
  return {
    type: AGE
    age,
  };
}

dispatch([updateName('Bob'), updateAge(33)]);
```

## Installation

```
npm install --save redux-iterator
```

Then, to enable Redux Iterator, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

As seen below, iterator ***MUST*** go before thunk middleware in order to avoid issues with thunk invoking the dispatched generator (meant for iterator)

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

## Examples

### With Arrays

```js
const arr = [updateName('Bob'), updateAge(33), updateCounter()]
dispatch(arr);
```

### With Objects

```js
const obj = { name: updateName('Bob'), age: updateAge(33), counter: updateCounter() }
dispatch(obj);
```

### With Sets

```js
const set = new Set();
      set.add(updateName('Bob'))
        .add(updateAge(33))
        .add(updateCounter());
dispatch(set);
```

### With Maps

```js
const map = new Map([['key1', updateName('Bob')], ['key2', updateAge(33)], ['key3', updateCounter()]]);
dispatch(map);
```

### With Generators

```js
function* generator() {
        yield updateName('Bob');
        yield updateAge(33);
        yield updateCounter();
      }

dispatch(generator);
```
g
## License

ISC
