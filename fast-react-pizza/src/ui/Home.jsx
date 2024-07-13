import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  return (
    <div className="my-12 text-center">
      <h1 className="mb-8 px-2 text-3xl font-extrabold leading-[30px] tracking-wider text-white md:text-5xl">
        <span className="text-3xl text-myOrange">Best</span> pizza
        <br />
        in town.
      </h1>

      <span className="text-sm font-normal text-white md:text-base">
        Straight out of the oven, straight to you.
      </span>
      <CreateUser />
      <Button type="primary">See the menu →</Button>
    </div>
  );
}

export default Home;
