function Pizza({ elObj }) {
  // if (elObj.soldOut) return null;
  return (
    <li className={`pizza ${elObj.soldOut ? "sold-out" : ""}`}>
      <img src={elObj.photoName} alt={elObj.name} />
      <div>
        <h3>{elObj.name}</h3>
        <p>{elObj.ingredients}</p>

        {/* {elObj.soldOut ? (
          <span className="sold-out">Sold OUT</span>
        ) : (
          <span>{elObj.price}</span>
        )} */}

        <span>{elObj.soldOut ? "SOLD OUT" : elObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
