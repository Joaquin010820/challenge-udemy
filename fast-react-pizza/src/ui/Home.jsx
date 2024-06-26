import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-12 text-center">
      <h1 className="mb-8 text-3xl font-semibold leading-[30px] tracking-wider text-myOrange">
        The best pizza.
        <br />
        <span className="text-sm text-white">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
