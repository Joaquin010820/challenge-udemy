import { useState } from "react";
import Summary from "./Summary";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import MovieBox from "./MovieBox";
import WatchedBox from "./WatchedBox";

export default function MainComponent({ movies, watched }) {
  return (
    <main className="main">
      <MovieBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}
