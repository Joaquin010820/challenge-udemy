export default function TipItem({ children, tip, onChangeTip }) {
  return (
    <div className="text-xl flex">
      <label>{children}</label>
      <select value={tip} onChange={onChangeTip}>
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
