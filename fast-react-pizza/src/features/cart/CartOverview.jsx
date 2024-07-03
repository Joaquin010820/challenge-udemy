import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-red-400 bg-transparent p-1 px-5 text-sm text-white md:px-10 md:text-base">
      <p>
        <span>23 pizzas </span>
        <span className="font-semibold text-myOrange">$23.45</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
