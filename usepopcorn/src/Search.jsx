import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!query) return;
  //   const movieTitle = String(query);

  //   onSearchMovie(movieTitle);
  //   setQuery("");
  // }

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
    function callBack(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [setQuery]);
  return (
    // <form onSubmit={handleSubmit}>
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
    // </form>
  );
}
