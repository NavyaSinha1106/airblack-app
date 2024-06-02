import "../ContentSection/ContentSection.css";
import CertificationLogo from "../../assets/certification-logo.svg";
import RatingLogo from "../../assets/rating-logo.svg";
import TickIcon from "../../assets/arrow-icon.svg";
import { contentText, featuresArr, backgroundImgArr } from "../../resource";
import FormSection from "../FormSection";
import CertificateSection from "../CertificateSection";
import ApplySection from "../ApplySection";

function ContentSection() {
  return (
    <>
      <div className="content-header">
        <h2>
          Professional Online <br /> Makeup Course
        </h2>
      </div>
      <div className="content-section">
        <div className="content-details">
          <div className="certification-pill">
            <img src={CertificationLogo} />
            <p>{contentText.pillText}</p>
          </div>
          <div className="rating">
            <img src={RatingLogo} />
            <p>{contentText.ratingText}</p>
          </div>
        </div>
        <ul>
          {featuresArr.map((feature, index) => (
            <div className="feature">
              <img src={TickIcon} />
              <li>{feature}</li>
            </div>
          ))}
        </ul>
        <FormSection />
      </div>
      <ApplySection />
      <CertificateSection />
    </>
  );
}

export default ContentSection;
