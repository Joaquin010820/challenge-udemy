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
    <div className="bg-bgColor font-myPoppins grid-flow-myRows grid h-screen">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
