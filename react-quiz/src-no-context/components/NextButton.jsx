export default function NextButton({ dispatch, index, numQuestion }) {
  if (index < numQuestion - 1)
    return (
      <button
        className={"btn btn-ui"}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
