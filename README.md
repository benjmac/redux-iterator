# redux-iterator

### About
Readme practice

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
