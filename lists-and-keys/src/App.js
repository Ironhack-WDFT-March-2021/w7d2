import React from 'react';
import './App.css';
import MoviesList from './MoviesList';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // this.state.movies.push(newMovie) ❌ - this would mutate the state directly
    // const moviesCopy = this.state.movies.slice();
    // moviesCopy.push(newMovie);
    // this.setState({
    //   movies: moviesCopy
    // });
    this.setState((state) => ({
      movies: [newMovie, ...state.movies]
    }))
  }

  render() {
    // don't use index as a key prop
    const moviesList = this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>));

    return (
      <div className="App" >
        <h1>Movies List 🎬 🍿</h1>
        <button onClick={this.addMovie}>Add the movie Interstellar</button>
        {/* <ul>
          {moviesList}
        </ul> */}
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
