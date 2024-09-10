import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <HashLink className="button-primary" to="/reservations">
            Reserve a Table
          </HashLink>
        </div>
        <div className="hero-image-container">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
