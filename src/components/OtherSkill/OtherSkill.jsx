import './OtherSkill.css'

const OtherSkill = ({ topics }) => {
  return (
    <div className="otherskill-container">
      <h4 className="otherskill-title">Outras Skills</h4>
      <div className="otherskill-chips-container">
        {topics && Array.isArray(topics) && topics.map((topic, index) => (
          <span key={index} className="otherskill-chip">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OtherSkill;