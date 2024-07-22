import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && 'opacity-70 grayscale'} rounded-lg`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm capitalize italic text-slate-200">
          {ingredients.join(', ')}
        </p>
        <div className="between mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm text-slate-200">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-slate-300">
              Sold out
            </p>
          )}

          <div className="flex items-center gap-3 md:gap-8">
            {!soldOut &&
              (isInCart ? (
                <>
                  <UpdateItemQuantity
                    pizzaId={id}
                    currentQuantity={currentQuantity}
                  />
                  <DeleteItem pizzaId={id} />
                </>
              ) : (
                <Button type="small" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
