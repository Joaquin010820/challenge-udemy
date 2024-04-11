import Button from "./Button";
export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend === selectedFriend;
  return (
    <li className={isSelected && "selected"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : null
        }
      >
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
          : friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : `You and ${friend.name} are even`}
      </p>
      <Button btn={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
