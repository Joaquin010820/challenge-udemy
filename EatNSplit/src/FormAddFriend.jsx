import { useState } from "react";
import Button from "./Button";
export default function FormAddFriend({ addUser }) {
  const [isAdd, setIsAdd] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!isAdd || !img) return;

    // variable for containing new friend
    const newVal = {
      balance: 0,
      id: crypto.randomUUID(),
      name: isAdd,
      image: img,
    };
    addUser(newVal);

    setIsAdd("");
    setImg("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯Friend name</label>
      <input
        type="text"
        value={isAdd}
        onChange={(e) => setIsAdd(e.target.value)}
      />

      <label>🖼️Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}
