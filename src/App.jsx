import Avatar from "./Components/Avatar/Avatar";
import Intro from "./Components/Intro/Intro";
import SkillList from "./Components/SkillList/SkillList";

export default function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <Intro />
        <SkillList />
      </div>
    </>
  );
}
