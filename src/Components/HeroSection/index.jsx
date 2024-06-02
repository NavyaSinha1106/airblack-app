import { heroImgArr } from "../../resource";
import "../HeroSection/HeroSection.css";
import AirblackLogo from "../../assets/airblack-logo.svg";
import heroBackground from "../../assets/hero-bg.svg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-images-container">
        <img className="hero-img" src={heroBackground} />
      </div>
      <div className="hero-logo">
        <div className="logo-container">
          <img src={AirblackLogo} />
          <h3>PRESENTS</h3>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
