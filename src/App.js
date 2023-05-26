import logo from './logo.svg';
import './App.css';
// Class based components
import React, { Component } from 'react'

export default class App extends Component {
  a="Pandit";
  render() {
    return (
      <div>
        <h1>Class based components</h1> {this.a}
      </div>
    )
  }
}

