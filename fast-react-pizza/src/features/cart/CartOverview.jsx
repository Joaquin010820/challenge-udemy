import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartPrice === 0) return null;

  return (
    <div className="flex items-center justify-between bg-transparent p-1 px-5 text-sm text-white md:px-10 md:text-base">
      <p>
        <span>{totalCartQuantity} pizzas </span>
        <span className="font-semibold text-myOrange">
          {formatCurrency(totalCartPrice)}
        </span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
