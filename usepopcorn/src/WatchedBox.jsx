import { useState } from "react";
import Summary from "./Summary";
import WatchedList from "./WatchedList";
import Button from "./Button";
export default function WatchedBox({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div className="box">
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 && (
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}
