import { Link } from 'react-router-dom';
import Step from './Step';
import '../styles/componentStyles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'List your item',
      description: "Share what you're ready to part with. Upload a few photos and describe what you're looking for in return."
    },
    {
      stepNumber: 2,
      title: 'Find a match',
      description: "Browse the loop for things you actually need. Our algorithm suggests trades based on mutual wants and location."
    },
    {
      stepNumber: 3,
      title: 'Meet and swap',
      description: "Connect locally with verified community members and complete the trade safely in your neighborhood."
    }
  ];

  return (
    <section className="how-it-works">
      <h3 className="how-it-works-title">How it works</h3>
      <div className="how-it-works-steps">
        {steps.map((step) => (
          <Step
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      <div className="how-it-works-cta-container">
        <Link
          to="/signup"
          className="how-it-works-cta"
        >
          Start Trading Today
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
