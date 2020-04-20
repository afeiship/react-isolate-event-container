import ReactIsolateEventContainer from '../src/main';
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
