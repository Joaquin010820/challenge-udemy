import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-12 text-center">
      <h1 className="text-myOrange mb-8 text-9xl font-semibold leading-[80px] tracking-wider">
        The best pizza.
        <br />
        <span className="text-3xl text-white">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
