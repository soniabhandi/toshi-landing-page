import "./Header.css";
import toshicat from "../assets/toshicat.png";
import base_logo from "../assets/base_logo.png";
import Lijn from "../assets/Lijn.png";

const HeadSection = () => {
  return (
    <>
      <div className="main">
        <div className="sub-main-one">
          <div className="head-top">
            <div className="sub-heading">
              <p className="heading-text">
                Toshi: Base first suite of DeFi products
              </p>
            </div>
            <div className="intro-text">
              <p className="intro">
                Welcome to Toshi, the first suite of DeFi products on Base
                blockchain! We’re excited to introduce our first product,a token
                locker that allows you to easily lock the liquidity of your
                tokens. With base, you’ll have access to innovative
              </p>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-head">
              <img className="base-image" src={base_logo} alt="base_logo" />
              <img src={Lijn} alt="Lijn" />
            </div>
          </div>
        </div>

        <div className="header-image">
          <img src={toshicat} alt="toshi-cat" />
        </div>
        <div className="sub-main-two">
          <h1 className="heading">Toshi tools</h1>
        </div>
      </div>
    </>
  );
};

export default HeadSection;
