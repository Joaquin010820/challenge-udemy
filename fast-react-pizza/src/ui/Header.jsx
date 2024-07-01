import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
// import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-around border-b-2 bg-transparent px-1 py-1 text-sm font-normal text-white md:text-base">
      <Link to="/" className="font-semibold tracking-widest">
        Crust Pizza Parlor
      </Link>
      <SearchOrder />
      {/* <Username /> */}
    </header>
  );
}
