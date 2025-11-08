import OtherSkill from "../OtherSkill/OtherSkill";
import "./AsideSoftHard.css";
import SkillsList from "../SkillsList/SkillsList";
import Lengs from "../Lengs/Lengs";

function AsideSoftHard(props) {
  return (
    <aside>
      <h2>Soft & hard skills</h2>
      <p>Afinidade com as seguintes tecnologias e técnicas:</p>
      <div className="line"></div>
      <SkillsList title={props.title} skills={props.skills} />
      <OtherSkill topics={props.topics} />
      <SkillsList title={props.title1} skills={props.skills1} />
      <Lengs
        title={props.ltitle}
        content={props.content}
        content1={props.content1}
      />
    </aside>
  );
}

export default AsideSoftHard;
