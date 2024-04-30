import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
// const KEY = "f84fc31d";
// const KEY = "8a317c4f";
export default function SelectedMovie({
  selectedId,
  setSelectedId,
  handleAddingWatchedMovie,
  rating,
  setRating,
  watched,
}) {
  const [movie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // passing this useState in StarRating component
  const [tempRating, setTempRating] = useState(0);

  // determine if the user already added the movie in the watched list, then it render to not show the StarRating component
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  // this useEffect will be render everytime there is changes in selectedId came from the Parent component which is in the App
  useEffect(() => {
    async function fetchSelectedId() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=8a317c4f&i=${selectedId}`
        );
        if (!res.ok) throw new Error("Something went wrong with fetching");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setSelectedMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSelectedId();
  }, [selectedId]);

  // this useEffect will handle changes in the browser title, it does not require self invoking function
  useEffect(() => {
    if (!movie.Title) return;
    document.title = `Movie | ${movie.Title}`;

    // this return statement is the clean uo function in useEffect where in after the unount it return to ist default
    return () => {
      document.title = "usePopcorn";
    };
  }, [movie]);

  useEffect(() => {
    function callBack(e) {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    }

    document.addEventListener("keydown", callBack);

    // this return statement is the clean uo function in useEffect where in after the unount it return to ist default
    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [setSelectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              onClick={() => {
                setSelectedId(null);
                setRating("");
              }}
              className="btn-back"
            >
              &larr;
            </button>

            <img src={movie.Poster} alt={movie.Title} />

            <div className="details-overview">
              <h2> {movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbRating} IMdb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isWatched ? (
                <p>
                  You rated with this movie {watchedUserRating}
                  <span>⭐</span>
                </p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    rating={rating}
                    setRating={setRating}
                    tempRating={tempRating}
                    setTempRating={setTempRating}
                  />
                  {rating ? (
                    <button
                      className="btn-add"
                      onClick={() => {
                        handleAddingWatchedMovie(movie);
                        setSelectedId(null);
                        setRating("");
                      }}
                    >
                      <p> + Add to list</p>
                    </button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
