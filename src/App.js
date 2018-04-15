import React, { Component } from 'react';
import './styles/App.scss';
import { Tabs } from './components/Tabs/tabs',
import { Pane } from './components/Pane/pane'



const App = React.createClass({
  render: function () {
    return (
      <div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
});
 
ReactDOM.render(<App />, document.querySelector('.container'));