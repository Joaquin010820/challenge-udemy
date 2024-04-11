/* eslint-disable react/prop-types */
export default function Item({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleClick() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div>
      <li
        className={`item ${isOpen && "open"} cursor-pointer`}
        onClick={handleClick}
      >
        <span className="number">
          {num < 9 ? 0 : null}
          {num + 1}
        </span>
        <span className="title"> {title}</span>
        <span className="icon">{isOpen ? "-" : "+"}</span>
        {isOpen && <div className="content-box">{children}</div>}
      </li>
    </div>
  );
}
