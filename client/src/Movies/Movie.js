import React from 'react';
import axios from 'axios';

export default class MovieCard extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = (this.props.match.params.id);
    console.log(this.props);
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }

  



    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="movie-card">
        <button onClick={ () => {this.props.history.push("/")} }>Take me Home Country Road..to the place I belong</button>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    );
  }
}
