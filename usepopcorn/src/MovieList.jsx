import MovieItem from "./MovieItem";

export default function MovieList({ movie, handleSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {movie.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          handleSelectedMovie={handleSelectedMovie}
        />
      ))}
    </ul>
  );
}
