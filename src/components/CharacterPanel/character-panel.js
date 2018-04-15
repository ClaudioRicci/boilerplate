import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CharacterPanel extends React.Component {
  render() {
    return (      
      <h1>Hello {this.props.name}</h1>      
    );
  }
}

ReactDOM.render(
  <CharacterPanel name="Firefly"/>,
  document.getElementById('react_example')
);
