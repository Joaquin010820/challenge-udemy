export default function Button({ children, btn }) {
  return (
    <button className="button" onClick={btn}>
      {children}
    </button>
  );
}
