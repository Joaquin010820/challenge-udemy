import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useQuiz();

  // this is also same for questions[index]
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}
