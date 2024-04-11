import Card from "./Card";
import Avatar from "./Avatar";
import Skillset from "./Skillset";
function App() {
  return (
    <>
      <div className="w-96 h-auto flex flex-col border-2 border-black">
        <Avatar />
        <Card />
        <Skillset />
      </div>
    </>
  );
}

export default App;
