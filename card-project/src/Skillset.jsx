import Skill from "./Skill";

export default function Skillset() {
  const skills = [
    { skill: "HTML & CSS", level: "Advanced", color: "bg-red-500" },
    { skill: "JavaScript", level: "Intermediate", color: "bg-blue-500" },
    { skill: "Tailwind", level: "Beginner", color: "bg-cyan-500" },
    { skill: "Github & Git", level: "Beginner", color: "bg-orange-500" },
    { skill: "React", level: "Beginner", color: "bg-green-500" },
    { skill: "Php", level: "Beginner", color: "bg-amber-500" },
    { skill: "MySql", level: "Beginner", color: "bg-pink-500" },
  ];

  return (
    <div className="p-6 pt-2 flex gap-3 flex-wrap">
      {skills.map((el) => (
        <Skill
          skill={el.skill}
          level={el.level}
          color={el.color}
          key={el.skill}
        />
      ))}
    </div>
  );
}
