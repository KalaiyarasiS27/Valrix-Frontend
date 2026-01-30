import { Link } from 'react-router-dom';
import heroImage from '../assets/images/Valrix-Hero Image.png';
import '../styles/componentStyles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">
            Trade what you have for what you need
          </h2>
          <p className="hero-description">
            Valrix is the community-driven platform where items find new homes through direct exchange. No cash, just community.
          </p>
          <div className="hero-cta-container">
            <Link
              to="/signup"
              className="hero-cta"
            >
              Join the loop
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div 
            className="hero-image"
            style={{
              backgroundImage: `url(${heroImage})`
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
