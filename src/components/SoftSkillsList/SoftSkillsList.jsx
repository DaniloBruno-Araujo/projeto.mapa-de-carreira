import './SoftSkillsList.css'

const SoftSkillsList = ({ list }) => {
  return (
    <div className="SoftList">
      <h4>Soft Skills exigidas para essa carreira</h4>
      <ul>
        {list &&
          Array.isArray(list) &&
          list.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default SoftSkillsList;