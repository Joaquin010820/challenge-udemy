import { useEffect, useState } from "react";
import StarRating from "./StarRating";
// const KEY = "f84fc31d";
// const KEY = "8a317c4f";
export default function SelectedMovie({ selectedId, setSelectedId }) {
  const [movie, setSelectedMovie] = useState({});

  useEffect(() => {
    async function fetchSelectedId() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=8a317c4f&i=${selectedId}`
      );
      const data = await res.json();
      setSelectedMovie(data);
      console.log(data);
    }

    fetchSelectedId();
  }, [selectedId]);
  return (
    <div className="details">
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
        <StarRating maxRating={10} />
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}
