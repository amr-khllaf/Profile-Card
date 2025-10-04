import Skill from "../Skill/Skill";
import { skillsList } from "../../assets/skills";

export default function SkillList() {
  return (
    <>
      <div className="skill-list">
        {skillsList.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill.skill}
            level={skill.level}
            color={skill.color}
          />
        ))}

        {/* <Skill skill="Vandal" emoji="🖌️" color="#FF0000" />
        <Skill skill="Phantom" emoji="👻" color="#00FF00" />
        <Skill skill="Odin" emoji="🪄" color="#0000FF" />
        <Skill skill="Spectre" emoji="👤" color="#FFFF00" />
        <Skill skill="Shrief" emoji="🕵️‍♂️" color="#FF00FF" />
        <Skill skill="Aries" emoji="♈" color="#00FFFF" /> */}
      </div>
    </>
  );
}
