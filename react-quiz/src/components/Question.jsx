import Options from "./Options";

export default function Question({ questions }) {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options question={questions} />
    </div>
  );
}
