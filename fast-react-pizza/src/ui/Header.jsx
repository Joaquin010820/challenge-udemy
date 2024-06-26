import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-around border-b-2 bg-transparent px-16 py-4 font-normal text-white">
      <Link to="/" className="font-semibold tracking-widest">
        Crust Pizza Parlor
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
