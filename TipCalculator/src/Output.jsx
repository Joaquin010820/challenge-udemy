export default function Output({ bill, tipTotal, totalPayment }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">
        You pay {totalPayment}$ (${bill} + {tipTotal}$)
      </h3>
    </div>
  );
}
