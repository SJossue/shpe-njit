import { Link } from 'react-router-dom';
import './Hero.css';
import { heroContent } from '../../content/heroContent';

const Hero = () => {
  const { title, subtitle, buttons, stats } = heroContent;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-buttons">
          <Link to={buttons.primary.url} className="btn btn-primary">
            {buttons.primary.text}
          </Link>
          <Link to={buttons.secondary.url} className="btn btn-outline">
            {buttons.secondary.text}
          </Link>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
