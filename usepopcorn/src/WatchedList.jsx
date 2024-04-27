import WatchedItem from "./WatchedItem";

export default function WatchedList({ watched, handleDeleteWatchedItem }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem
          movie={movie}
          key={movie.imdbID}
          handleDeleteWatchedItem={handleDeleteWatchedItem}
        />
      ))}
    </ul>
  );
}
