import { useState } from "react";
import Item from "./Item";
export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      <ul>
        {data.map((questions, index) => (
          <Item
            title={questions.title}
            key={questions.title}
            num={index}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {questions.text}
          </Item>
        ))}
      </ul>
    </div>
  );
}
