import MovieItem from "./MovieItem";

export default function MovieList({ movie }) {
  return (
    <ul className="list">
      {movie.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
