import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    ' text-sm rounded-full bg-myOrange tracking-wide text-white transition-colors duration-700 hover:bg-red-400 focus:outline-none focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-3 py-2 md:px-6 md:py-4',
    small: base + ' px-3 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full',
    secondary:
      ' text-sm rounded-full border tracking-wide text-slate-200 transition-colors duration-700 hover:bg-red-400 focus:outline-none focus:ring-myOrange focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4 px-3 py-1.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
