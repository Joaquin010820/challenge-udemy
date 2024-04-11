import Friend from "./Friend";

export default function FriendsList({
  onAddfriends,
  onSelection,
  selectedFriend,
}) {
  return (
    <ul>
      {onAddfriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
