import Button from "./Button";
import "./EndSection.css";

const EndSection = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-head">
            <p className="footer-text">
              Toshi: Base first suite of DeFi products
            </p>
          </div>
          <div className="btn-head">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default EndSection;
