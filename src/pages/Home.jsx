import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
