import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

export default function AppLayout() {
  // this line of codes determine if specific components is either in idle, loading, or in submitting state
  // this useNavigatiion() is provided by reatc router
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    // grid-rows-[] squre bracket for own customization just like we do in tailwind config
    <div className="grid h-screen grid-rows-[70px_1fr_100px] bg-bgColor">
      {isLoading && <Loader />}

      <Header />

      <div className="mx-auto my-auto w-10/12 overflow-auto">
        <main>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
