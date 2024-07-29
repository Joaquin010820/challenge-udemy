import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-xs">
        <p>
          <span className="font-semibold">
            {quantity}&times; {name}
          </span>
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="text-xs italic text-stone-200">
        {isLoadingIngredients ? 'Loading....' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
