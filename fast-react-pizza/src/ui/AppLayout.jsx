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
    <div className="grid h-screen grid-rows-myRows bg-bgColor font-myPoppins">
      {isLoading && <Loader />}

      <Header />

      <main className="flex items-center justify-center">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
