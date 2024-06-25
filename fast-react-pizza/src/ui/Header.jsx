import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header className="bg-transparent font-normal text-white">
      <Link to="/">Crust Pizza Parlor</Link>
      <SearchOrder />
      <p>Joaquin</p>
    </header>
  );
}
