import Bill from "./Bill";
import Tip from "./Tip";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipVal, setTipVal] = useState(0);
  const [tipValF, setTipValF] = useState(0);

  function handleChangeBill(e) {
    setBill(() => Number(e.target.value));
  }

  function handleChangeTip(e) {
    setTipVal(() => Number(e.target.value));
  }

  function handleChangeTipF(e) {
    setTipValF(() => Number(e.target.value));
  }

  function handleReset() {
    setBill("");
    setTipVal(0);
    setTipValF(0);
  }

  const totalTip = (tipVal + tipValF) / 100;
  const tipComputation = bill * totalTip;
  const totalPayment = bill + tipComputation;

  return (
    <div className="min-h-screen bg-cyan-100 p-10 flex gap-2 flex-col">
      <Bill bill={bill} onChangeBill={handleChangeBill} />
      <Tip
        tipVal={tipVal}
        onChangeTip={handleChangeTip}
        tipValF={tipValF}
        onChangeTipF={handleChangeTipF}
      />

      {bill && (
        <>
          <Output
            bill={bill}
            tipTotal={tipComputation}
            totalPayment={totalPayment}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
