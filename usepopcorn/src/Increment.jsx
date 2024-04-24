import { useState } from "react";

const boxes = [
  { title: "Box 1", bg: "bg-red-400" },
  { title: "Box 2", bg: "bg-blue-400" },
  { title: "Box 3", bg: "bg-pink-400" },
  { title: "Box 4", bg: "bg-orange-400" },
];

const content = [
  { bg: "bg-red-400" },
  { bg: "bg-blue-400" },
  { bg: "bg-pink-400" },
  { bg: "bg-orange-400" },
];

export default function Increment() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <p>{count}</p>
        <span>💗</span>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="border-2 bg-red-600 text-white p-2"
        >
          +
        </button>
        <button
          onClick={() => setCount((c) => c + 2)}
          className="border-2 bg-red-600 text-white p-2"
        >
          +++
        </button>
      </div>

      <div className="flex gap-2 items-center justify-center flex-col mt-5">
        <nav className="flex gap-2 cursor-pointer">
          {boxes.map((box, index) => (
            <Button key={index} title={box.title} bg={box.bg} />
          ))}
        </nav>

        <div className="flex gap-2">
          {content.map((boxes, index) => (
            <Content key={index} bg={boxes.bg} />
          ))}
        </div>
      </div>
    </>
  );
}

function Button({ children, title, bg }) {
  return <button className={`border-2 border-black p-2 ${bg}`}>{title}</button>;
}

function Content({ bg }) {
  return <div className={`${bg} h-40 w-40`}></div>;
}
