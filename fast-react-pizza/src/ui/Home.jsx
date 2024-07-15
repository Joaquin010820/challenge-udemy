import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-12 pt-6 text-center md:pt-0">
      <h1 className="mb-8 px-2 text-5xl font-extrabold tracking-widest text-white md:text-7xl lg:text-8xl">
        <span className="text-5xl text-myOrange md:text-7xl lg:text-8xl">
          BEST
        </span>{' '}
        PIZZA
        <br />
        IN TOWN.
        <br />
        <span className="text-sm font-normal tracking-wider text-white md:text-base lg:text-xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="menu">
          Continue ordering, {username} →
        </Button>
      )}
    </div>
  );
}

export default Home;
