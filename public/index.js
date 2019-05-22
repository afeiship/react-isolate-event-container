import ReactIsolateEventContainer from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  _onClick = (e) => {
    console.log('inner click1');
  };
  _onOutterClick = (e) => {
    console.log('outter click2');
  };
  _onCntClick = (e) => {
    console.log('container click3');
  };
  render() {
    return (
      <div className="app-container" onClick={this._onCntClick}>
        <div className="isolated" onClick={this._onOutterClick}>
          <ReactIsolateEventContainer items={['onClick']}>
            <button onClick={this._onClick}>I am isolated</button>
          </ReactIsolateEventContainer>
        </div>

        <div className="no-isolated" onClick={this._onOutterClick}>
          <button onClick={this._onClick}>I am isolated</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
