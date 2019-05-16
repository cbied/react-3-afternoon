import React, { Component } from 'react'
import data from '../data'


export class Nav extends Component {
  constructor() {
    super()

    this.state = {
      dataLength: data.length,
      index: 0
    }

    this.handleNextIndex = this.handleNextIndex.bind(this)

  }

  handleNextIndex(val,index) {
    if (val === 'prev') {
      if (index === 0) {
        index = 24;
      } else {
        index -= 1;
      }
    } else if (val === 'next') {
      if (index === this.state.dataLength-1) {
        index = 0;
      } else {
        index += 1;
      }
    }
    this.setState({index: index})
    this.props.handleNextIndexCb(index);
  }

  render() {
    return (
      <div className="Nav">
        <h3 id="prev"
        onClick={(e) => this.handleNextIndex(e.target.id,this.state.index)}> {"<"} Previous </h3>
        <h3 id="next"
        onClick={(e) => this.handleNextIndex(e.target.id,this.state.index)}>Next {">"}</h3>
      </div>
      
    )
  }
}

export default Nav
