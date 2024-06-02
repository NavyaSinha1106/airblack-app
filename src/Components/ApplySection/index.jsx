import { ApplyText, buttonText, statsArr } from "../../resource";
import "../ApplySection/ApplySection.css";
import RightDash from "../../assets/right-line.svg";
import LeftDash from "../../assets/left-line.svg";
import GridBackground from "../GridBackground";

function ApplySection() {
  return (
    <GridBackground>
      <div className="apply-content">
        <div className="apply-header">
          <img src={LeftDash} />
          <h2>{ApplyText.ApplyTitle}</h2>
          <img src={RightDash} />
        </div>
        <div className="apply-stats">
          {statsArr.map((stats) => (
            <div className="stats-item">
              <img className="stats-icon" src={stats.icon} />
              <p>{stats.text}</p>
            </div>
          ))}
        </div>
        <button className="stats-btn">{buttonText.applyBtn}</button>
      </div>
    </GridBackground>
  );
}

export default ApplySection;
