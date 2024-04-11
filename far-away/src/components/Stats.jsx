export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  //alertnative for filter method in counting
  // const totalPackedItems = items.reduce((acc, item) => acc + item.packed, 0);

  const numPacked = items.filter((item) => item.packed).length;

  // or use Math.abs() to converto to whole number
  const statsPacked = parseInt((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {statsPacked === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${statsPacked}%.`}
      </em>
    </footer>
  );
}
