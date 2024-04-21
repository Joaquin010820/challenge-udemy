import { useState } from "react";

export default function TextExpander({ children, isExpanded }) {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const message = children.toString();

  const cutMessage = isOpen
    ? message
    : message.split(" ").slice(0, 5).join(" ") + "...";
  return (
    <div className="border-2 border-slate-400 m-4 p-4 flex w-max">
      <p>{cutMessage}</p>
      <p
        onClick={() => setIsOpen((stateVal) => !stateVal)}
        className={`inline cursor-pointer ${
          isOpen ? "text-red-400" : "text-blue-400"
        }`}
      >
        {isOpen ? "Show less" : "Show more"}
      </p>
    </div>
  );
}
