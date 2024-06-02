import { FooterText, buttonText, socialMediaIconArr } from "../../resource";
import "../FooterSection/FooterSection.css";
import GridBackground from "../GridBackground";
function FooterSection() {
  return (
    <GridBackground>
      <div className="footer-content">
        <h2 className="footer-title">{FooterText.footerTitle}</h2>
        <button className="apply-btn">{buttonText.applyBtn}</button>
        <div className="social-links">
          {socialMediaIconArr.map((icon) => (
            <img src={icon} />
          ))}
        </div>
      </div>
    </GridBackground>
  );
}

export default FooterSection;
