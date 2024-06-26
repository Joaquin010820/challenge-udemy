import { useQuiz } from "../context/QuizContext";

export default function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const hasAnswered = answer !== null;

  // this is also same with questions[index]
  const question = questions.at(index);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            hasAnswered &&
            `${index === answer && "answer"} ${
              index === question.correctOption ? "correct" : "wrong"
            }`
          } `}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
