export default function Button({ textColor, bgColor, handleClick, children }) {
  return (
    <button className={`${textColor} ${bgColor}`} onClick={handleClick}>
      {children}
    </button>
  );
}
