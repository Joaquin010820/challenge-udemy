export default function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 pm until {closeHour - 12}:00 pm. Come
        visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
