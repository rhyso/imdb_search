import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/movie'
import Search from "./components/search";
import { initialState, reducer } from "./store/reducer"

function App() {

  //const [movieList, setMovieList] = useState({})
  const [errorMessage, setErrorMessage] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState)

  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";



  // SEARCH_MOVIES_REQUEST
  // SEARCH_MOVIES_SUCCESS
  // SEARCH_MOVIES_FAIL


  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(json => {
        if (json.Response === "True") {
         dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: json.Search
        })
      }
        else if(json.Error ==='Too many results.') {
          dispatch({
            type: 'SEARCH_MOVIES_TOO_LARGE',
            payload: json.Error
          })
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_ERROR',
            payload: json.Error
          })
        }
      });
  };

  
  const { loading, error, movieList, tooMany } = state
  return (
    <div className="App">
     <Search search={search} />
        <div className="movie-list">
        {loading && !error ? (
          <span>loading...</span>
         ) : error ? (
          <div className="errorMessage">{error}</div>
          ) : !loading && tooMany ? (
            <div className="errorMessage">Too many movies sorry bud</div>
        ) : (
            movieList.map(movie => (
              <Movie movies={movie} />
            ))
          )
        }
        </div>
    </div>
  );
}

export default App;
