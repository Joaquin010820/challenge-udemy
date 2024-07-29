import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priotyPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priotyPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const {
    username,
    status: addressStatus,
    // we can use position.latitude or longitude for conditional rendering, but i chose address itself
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === 'loading';

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6 text-white">
      <h2 className="mb-8 text-xl font-semibold leading-6">
        Ready to order? Let's go!
      </h2>

      {/* // this Form with capital T is provided by the react router, Form method will be POST
      since we are tryong to send data to our server */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 p-2 text-xs text-myOrange">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="relative grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              className="input w-full"
              defaultValue={address}
            />

            {addressStatus === 'error' && (
              <p className="mt-2 p-2 text-xs text-myOrange">{errorAddress}</p>
            )}

            {!address && (
              <span className="absolute right-1 top-1 z-50 md:right-1.5 md:top-1.5">
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get Location
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="m-2 accent-myOrange focus:outline-none focus:ring-1 focus:ring-myOrange md:h-4 md:w-4"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium" onChange>
            Want to give your order priority?
          </label>
        </div>

        <div className="relative">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude}, ${position.longitude}`
                : ''
            }
          />

          <div className="absolute right-0">
            <Button disabled={isSubmitting || isLoadingAddress} type="primary">
              {isSubmitting
                ? 'Placing order...'
                : `Order now for ${formatCurrency(totalPrice)}`}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

//this is how you send data to server
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //editing some of our order before submitting it
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  // validation for phone number
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number, we might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // if everything is ok, create a new order and redirect
  const newOrder = await createOrder(order);

  // we cant use useDispatch for the function like this, useDispatch only possible for componnets
  // thats why we call our store and directly call the dispatch to clear cart upon placing an order
  // but dont overuse this technique which deactivates performance optimaization of redux
  store.dispatch(clearCart());

  // this redirect is also prpvided by react router
  // since we cannot use useParams inside the hooks, then we used redirect
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
