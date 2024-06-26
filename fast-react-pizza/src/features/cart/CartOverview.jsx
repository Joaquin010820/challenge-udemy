import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-around bg-red-400 bg-transparent p-1 text-sm text-white md:text-base">
      <p>
        <span>23 pizzas </span>
        <span className="font-semibold">$23.45</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
