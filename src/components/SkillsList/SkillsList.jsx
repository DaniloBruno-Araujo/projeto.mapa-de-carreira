import "./SkillsList.css";

const MAX_DOTS = 5;

const SkillsList = ({ title, skills }) => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">{title}</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="dots-container">
              {Array.from({ length: MAX_DOTS }, (_, index) => (
                <span
                  key={index}
                  className={`dot ${index < skill.level ? "filled" : "empty"}`}
                ></span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
