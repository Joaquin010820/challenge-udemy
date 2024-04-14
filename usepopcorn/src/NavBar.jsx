import Logo from "./Logo";
import NumResult from "./NumResult";
import Search from "./Search";
export default function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
}
