import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactIsolateEventContainer from '../src/main';
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
