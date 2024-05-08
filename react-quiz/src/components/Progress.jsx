export default function Progress({
  index,
  points,
  numQuestions,
  totalPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {totalPoints} point
      </p>
    </header>
  );
}
