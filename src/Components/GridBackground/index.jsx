import "../GridBackground/GridBackground.css";
import GridImgBackground from "../../assets/grid-bg.svg";

function GridBackground({ children }) {
  return (
    <div className="grid-section">
      <div className="images-container">
        <img className="img-item" src={GridImgBackground} />
      </div>
      {children}
    </div>
  );
}

export default GridBackground;
