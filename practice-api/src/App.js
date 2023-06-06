import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [films, setFilms] = useState([])

  const fetchFilmsHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films")
    const films = await response.json()
    setFilms(films.results)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchFilmsHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={films} />
      </section>
    </React.Fragment>
  );
}

export default App;
