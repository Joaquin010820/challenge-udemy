import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleMinusCount() {
    setCount((val) => val - step);
  }

  function handlePlusCount() {
    setCount((val) => val + step);
  }

  function currentDate() {
    const date = new Date();
    date.setDate(date.getDate() + count);
    return date.toDateString();
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {step} </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="pt-1 pb-1 pl-4 pr-4 border"
          onClick={handleMinusCount}
        >
          -
        </button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border border-slate-300"
        />

        <button
          className="pt-1 pb-1 pl-4 pr-4 border"
          onClick={handlePlusCount}
        >
          +
        </button>
      </div>

      <div>
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? count + " days from today: "
            : Math.abs(count) + " days ago was "}
          {currentDate()}
        </span>
      </div>

      {(count != 0 || step != 1) && (
        <button className="border-2 p-2" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}
