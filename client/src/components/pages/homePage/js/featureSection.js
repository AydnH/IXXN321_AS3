import React from "react";
import "../css/featureSection.css";
import Vortfolio from "../images/vortfolio.png";

export default class FeatureSection extends React.Component {
  render() {
    return (
      <div className="featureCont">
        <img id="vortImg" src={Vortfolio} alt="features" />
        <img
          id="featureImg"
          src="https://media.giphy.com/media/xWYv8lJZXv9Fm/source.gif"
          alt="feature"
        />
        <div className="projectDiv">
          <h2>COOL PROJECT NAME</h2>
          <div id="nameDiv">
            <div id="lineDiv"></div>
            <h3>FIRSTNAME LASTNAME</h3>
          </div>
        </div>
      </div>
    );
  }
}
