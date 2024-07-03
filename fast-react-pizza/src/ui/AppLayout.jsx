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
    <div className="grid h-screen grid-rows-[70px_1fr_100px] bg-bgColor font-myPoppins">
      {isLoading && <Loader />}

      <Header />

      <main className="flex items-center justify-center overflow-auto">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
