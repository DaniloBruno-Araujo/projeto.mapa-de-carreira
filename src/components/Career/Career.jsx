import "./Career.css";
import Job from "../Job/Job";
import TagList from "../tagList/TagList";
import SoftSkillsList from "../SoftSkillsList/SoftSkillsList";
import SkillsList from "../SkillsList/SkillsList";

function Career(props) {
  return (
    <div className="Carrer">
      <Job title={props.title} content={props.content} />
      <SoftSkillsList list={props.list}/>
      <TagList topics={props.topics} />     
    </div>
  );
}

export default Career;
