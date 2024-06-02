import CertificateImg from "../../assets/certificate-img.svg";
import RightDash from "../../assets/right-line.svg";
import LeftDash from "../../assets/left-line.svg";
import "../CertificateSection/CertificateSection.css";
import { CertificateText } from "../../resource";

function CertificateSection() {
  return (
    <div className="certificate-section">
      <div className="certificate-header">
        <img src={LeftDash} />
        <h2>{CertificateText.certificateTitle}</h2>
        <img src={RightDash} />
      </div>
      <img className="certificate-img" src={CertificateImg} />
    </div>
  );
}

export default CertificateSection;
