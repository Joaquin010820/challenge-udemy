export default function FinishScreen({
  dispatch,
  points,
  totalPoints,
  highscore,
}) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored: <strong>{points}</strong> / out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest Score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
