import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header className="bg-stone-700 font-normal text-stone-300">
      <Link to="/">Crust Pizza Parlor</Link>
      <SearchOrder />
      <p>Joaquin</p>
    </header>
  );
}
