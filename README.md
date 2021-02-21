# react-isolate-event-container
> A container that prevents certain events from propagating outside of the container.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-isolate-event-container
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-isolate-event-container/dist/style.css";

  // or use sass
  @import "~@jswork/react-isolate-event-container/dist/style.scss";

  // customize your styles:
  $react-isolate-event-container-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactIsolateEventContainer from '@jswork/react-isolate-event-container';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-isolate-event-container">
          <ReactIsolateEventContainer className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-isolate-event-container/


## license
Code released under [the MIT license](https://github.com/afeiship/react-isolate-event-container/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-isolate-event-container
[version-url]: https://npmjs.org/package/@jswork/react-isolate-event-container

[license-image]: https://img.shields.io/npm/l/@jswork/react-isolate-event-container
[license-url]: https://github.com/afeiship/react-isolate-event-container/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-isolate-event-container
[size-url]: https://github.com/afeiship/react-isolate-event-container/blob/master/dist/react-isolate-event-container.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-isolate-event-container
[download-url]: https://www.npmjs.com/package/@jswork/react-isolate-event-container
