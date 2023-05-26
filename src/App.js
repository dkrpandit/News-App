import './App.css';
// Class based components
import React, { Component } from 'react'

export default class App extends Component {
  a="Pandit";
  render() {
    return (
      <div>
        Class based components {this.a}
      </div>
    )
  }
}

