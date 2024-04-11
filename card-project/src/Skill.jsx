export default function Skill({ skill, level, color }) {
  return (
    <div className={`w-auto ${color} rounded-md`}>
      <span className={"text-black p-1 "}>{skill}</span>
      <span>
        {level == "Advanced" ? "💪🏼" : level == "Intermediate" ? "👍🏼" : "👶🏼"}

        {/* {level == "Advanced" && "💪🏼"}
        {level == "Intermediate" && "👍🏼"}
        {level == "Beginner" && "👶🏼"} */}
      </span>
    </div>
  );
}
