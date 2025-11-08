import './TagList.css'

const TagList = ({ topics }) => {
  return (
    <div className="roadmap-container">
      <h4 className="roadmap-title">Roadmap de Aprendizado</h4>
      <div className="chips-container">
        {topics && Array.isArray(topics) && topics.map((topic, index) => (
          <span key={index} className="chip">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;