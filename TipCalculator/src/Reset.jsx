export default function Reset({ onReset }) {
  return (
    <button
      className="text-xl border border-solid border-2 border-sky-500 p-2 pt-1 pb-1 w-40"
      onClick={onReset}
    >
      Reset
    </button>
  );
}
