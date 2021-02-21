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
| items     | array  | false    | []      | React events list.                    |


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
    handleClick = (e) => {
      console.log('inner click1');
    };

    handleOutterClick = (e) => {
      console.log('outter click2');
    };

    handleCntClick = (e) => {
      console.log('container click3');
    };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-isolate-event-container">
          <div className="isolated" onClick={this.handleOutterClick}>
            <ReactIsolateEventContainer items={['onClick']}>
              <button className="button is-primary" onClick={this.handleClick}>
                I am isolated
              </button>
            </ReactIsolateEventContainer>
          </div>

          <div className="no-isolated" onClick={this.handleOutterClick}>
            <button className="button is-info" onClick={this.handleClick}>
              I am not isolated
            </button>
          </div>
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
