import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { index, points, numQuestions, totalPoints, answer } = useQuiz();
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
