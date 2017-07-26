# React-perf-HOC
React HOC that retrieves first render and further updates in milliseconds. 

## Example usage

```javascript
//SuspiciousComponent.js
import React, { Component } from 'react';
import sastre from 'react-perf-hoc';

class SuspiciousComponent  extends Component {
    constructor(props) {
      //internals.
    }
    // and go on...
}

export default sastre(SuspiciousComponent);
```


## Simple Steps

1. ```import sastre from 'react-perf-hoc'```.
2. ```export default sastre(MyComponent)```.
3. ```Run app and check console```.
