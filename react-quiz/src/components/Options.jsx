export default function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className="btn btn-option"
          key={option}
          onClick={() => console.log(index === question.correctOption)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
