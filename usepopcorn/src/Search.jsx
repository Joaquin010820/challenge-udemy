export default function Search({ query, setQuery }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!query) return;
  //   const movieTitle = String(query);

  //   onSearchMovie(movieTitle);
  //   setQuery("");
  // }
  return (
    // <form onSubmit={handleSubmit}>
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    // </form>
  );
}
