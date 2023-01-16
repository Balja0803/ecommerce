import "../styles/slider.css";
export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-left">
        <div className="canon">
          <h2>CANON</h2>
          <p>camera</p>
        </div>

        <div className="slider-buttons">
          <div className="slider-shop">Shop now</div>
          <div className="slider-view"> View more</div>
        </div>
      </div>
      <div className="slider-right">
        <img
          src="../images/canon.png"
          alt="canon"
          width="563px"
          height="534px"
        ></img>
        <div className="right-text">
          <p>Only</p>
          <p>$89</p>
        </div>
      </div>
    </div>
  );
}
