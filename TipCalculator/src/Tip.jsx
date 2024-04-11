import TipItem from "./TipItem";
export default function Tip({ tipVal, onChangeTip, tipValF, onChangeTipF }) {
  return (
    <div className=" flex gap-2 flex-col">
      <TipItem tip={tipVal} onChangeTip={onChangeTip}>
        <p>How did you like the service?</p>
      </TipItem>

      <TipItem tip={tipValF} onChangeTip={onChangeTipF}>
        <p>How did your friend like the service?</p>
      </TipItem>
    </div>
  );
}
