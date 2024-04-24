import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MainComponent from "./MainComponent";

import Search from "./Search";
import NumResult from "./NumResult";

import Box from "./Box";

import MovieList from "./MovieList";

import Summary from "./Summary";
import WatchedList from "./WatchedList";

// importing error message componnets
import ErrorMessage from "./ErrorMessage";

import SelectedMovie from "./SelectedMovie";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // use the useEffect if you wanted to run or render immmediately the external API\
  // to immediate call the function use this (async () => {})()
  // or you can just invoke the function like fetchMOvie()

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?i=tt3896198&apikey=8a317c4f&s=superman`
  //       );
  //       if (!res.ok) throw new Error("Something went wrong");
  //       const data = await res.json();
  //       setMovies(data.Search);
  //     } catch (err) {
  //       console.log(err.message);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  // use event handler if you wanted to render the api based on the events not render it immediately
  // use the aysnc function

  // function handleSearch(title) {
  //   (async () => {
  //     try {
  //       setError("");
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?i=tt3896198&apikey=8a317c4f&s=${title}`
  //       );
  //       const data = await res.json();
  //       if (data.Response === "False") throw new Error("Movie not found");
  //       setMovies(data.Search);
  //     } catch (err) {
  //       console.log(err.message);
  //       setError(err.message);
  //     }
  //   })();

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  useEffect(() => {
    async function fetchingMovie() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=8a317c4f&s=${query}`
        );
        if (!res.ok) throw new Error("Something went wrong fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchingMovie();
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>

      <MainComponent>
        <Box>
          {/* {isLoading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <MovieList movie={movies} />
          )} */}

          {isLoading && (
            <span className="loading loading-ring loading-lg"></span>
          )}
          {!isLoading && !error && (
            <MovieList
              movie={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </MainComponent>
    </>
  );
}
