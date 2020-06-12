import React from "react";
import "../css/homePage.css";

import FeatureSection from "./featureSection";

export default class Home extends React.Component {
  render() {
    return (

      <div id='homePageCont'>

        <FeatureSection/>

        <div id='titleCont'>
          <h1>VORTFOLIO's</h1>
          <h1 id='titleFlip'>TOP PICKS</h1>
        </div>

        <section>
          <div>
            <h2> cool projects</h2>
          </div>
        </section>

        <section>
          <div>
            <h2>Interesting Persons</h2>
          </div>
        </section>

        <section>
          <div>
            <h2> filter bar</h2>
          </div>
        </section>

        <section>
          <div>
            <h2> industrial projects</h2>
          </div>
        </section>

        <section>
          <div>
            <h2> interaction projects</h2>
          </div>
        </section>

        <section>
          <div>
            <h2> media projects</h2>
          </div>
        </section>

        <section>
          <div>
            <h2> communication projects</h2>
          </div>
        </section>

        <section>
          <div>
            <h2>view more</h2>
          </div>
        </section>

      </div>
    );
  }
}
