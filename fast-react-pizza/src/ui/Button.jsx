import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to }) {
  const style =
    'rounded-full bg-myOrange px-3 py-2 tracking-wide text-white transition-colors duration-700 hover:bg-orange-400 focus:outline-none focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4';

  if (to)
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={style}>
      {children}
    </button>
  );
}
