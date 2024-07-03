import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent px-5 py-1 text-sm font-normal text-white md:px-10 md:text-base">
      <Link to="/" className="font-semibold tracking-widest text-myOrange">
        Crust Pizza Parlor
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
