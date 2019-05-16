import React, { Component } from 'react';
import data from '../data'

export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data,
      index: 0
    }


  }


  render() {
    let data = this.state.data;
    let index = this.props.index
    return (
      <div className="Card">
        <div className="info">
           {/* first last name */}
          <h2>{data[index].name.first} {data[index].name.last}</h2>
          {/* h4 bold From: city, country */}
          {/* bold From: city, country */}
          <h4>From: {data[index].city}, {data[index].country}</h4>
          {/* bold Job Title: jobTitle */}
          <h4>Job Title: {data[index].title}</h4>
          {/* bold Employer: employer */}
          <h4>Employer: {data[index].employer}</h4>

          <h4>Favorite Movies</h4>
          {/* display favMovies */}
          <ol>
          <li>{data[index].favoriteMovies[0]}</li>
          <li>{data[index].favoriteMovies[1]}</li>
          <li>{data[index].favoriteMovies[2]}</li>
          </ol>
    
        </div>
        <div className="id">
          {/* add id */}
          <h2>{index + 1}/25</h2>
          
        </div>


        
      </div>


      
    )
  }
}

export default Card
