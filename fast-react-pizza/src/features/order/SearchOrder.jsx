import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    //this is how you pass data from one component to another using url in react router
    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-transparent px-2.5 py-1.5 text-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-30 sm:focus:w-40 md:w-36 md:text-base"
      />
    </form>
  );
}
