# react-isolate-event-container
> A container that prevents certain events from propagating outside of the container.

## installation
```shell
npm install -S @feizheng/react-isolate-event-container
```

## update
```shell
npm update @feizheng/react-isolate-event-container
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| items     | array  | false    | []      | React events list.                    |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-isolate-event-container/dist/style.scss";

  // customize your styles:
  $react-isolate-event-container-options: ()
  ```
2. import js
  ```js
  import ReactIsolateEventContainer from '@feizheng/react-isolate-event-container';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
        <div className="app-container" onClick={this.handleCntClick}>
          <div className="isolated" onClick={this.handleOutterClick}>
            <ReactIsolateEventContainer items={['onClick']}>
              <button className="button" onClick={this.handleClick}>
                I am isolated
              </button>
            </ReactIsolateEventContainer>
          </div>

          <div className="no-isolated" onClick={this.handleOutterClick}>
            <button className="button" onClick={this.handleClick}>
              I am not isolated
            </button>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-isolate-event-container/
