import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
// const KEY = "f84fc31d";
// const KEY = "8a317c4f";
export default function SelectedMovie({
  selectedId,
  setSelectedId,
  addingWatchedMovie,
  rating,
  setRating,
}) {
  const [movie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // passing this useState in StarRating component
  const [tempRating, setTempRating] = useState(0);

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
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSelectedId();
  }, [selectedId]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button onClick={() => setSelectedId(null)} className="btn-back">
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
              <StarRating
                maxRating={10}
                rating={rating}
                setRating={setRating}
                tempRating={tempRating}
                setTempRating={setTempRating}
              />
            </div>
            {rating ? (
              <div
                className="btn-add"
                onClick={() => {
                  addingWatchedMovie(movie);
                  setSelectedId(null);
                  setTempRating(0);
                }}
              >
                <p>Add Favorites</p>
              </div>
            ) : (
              ""
            )}

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
