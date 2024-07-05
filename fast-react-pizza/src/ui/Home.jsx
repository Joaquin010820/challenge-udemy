import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-12 text-center">
      <h1 className="mb-8 px-2 text-3xl font-extrabold leading-[30px] tracking-wider text-myOrange md:text-5xl">
        The best pizza.
        <br />
        <span className="text-sm font-normal text-white md:text-base">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
