import React, { Component } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav'
import Card from './Components/Card'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }

  this.handleNextIndexCb = this.handleNextIndexCb.bind(this)
  }

  handleNextIndexCb(val) {
    this.setState({ index: val })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card index={this.state.index}/>
        <Nav handleNextIndexCb={this.handleNextIndexCb} />

      </div>
    );
  }

}

export default App;
