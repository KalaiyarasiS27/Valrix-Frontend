import '../styles/componentStyles/step.css';

const Step = ({ stepNumber, title, description }) => {
  return (
    <div className="step-container">
      <div className="step-number">
        {stepNumber}
      </div>
      <div className="step-content">
        <h4 className="step-title">{title}</h4>
        <p className="step-description">{description}</p>
      </div>
    </div>
  );
};

export default Step;
