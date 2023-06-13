import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchFilmsHandler = useCallback(async () => {
    try {
      const filmsOnBase= []
      const response = await fetch("https://reacthttp-65347-default-rtdb.firebaseio.com/movies.json")

      if (!response.ok) {
        throw new Error('Error, please fix.')
      }

      const films = await response.json()

      for(const key in films){
        filmsOnBase.push({
          id: key,
          title: films[key].title,
          openingText: films[key].openingText,
          releaseDate: films[key].releaseDate
        })
      }

      setFilms(filmsOnBase)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  const addMovieHandler = async movie => {
    const response = await fetch("https://reacthttp-65347-default-rtdb.firebaseio.com/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchFilmsHandler()
  }, [fetchFilmsHandler])

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchFilmsHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && films.length > 0 && <MoviesList movies={films} />}
        {!isLoading && films.length === 0 && !error && <p>No movies found!</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
