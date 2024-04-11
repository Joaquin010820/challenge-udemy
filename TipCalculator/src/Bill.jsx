export default function Bill({ bill, onChangeBill }) {
  return (
    <div className="flex gap-2">
      <label className="text-xl">How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={onChangeBill}
      />
    </div>
  );
}
