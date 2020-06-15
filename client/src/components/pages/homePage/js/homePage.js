import React from "react";
import "../css/homePage.css";

import FeatureSection from "./featureSection";
import CoolProjects from "./CoolProjects";
import InterestingPeople from "./InterestingPeople";
import FilterBar from "./FilterBar";


export default class Home extends React.Component {
  render() {
    return (

      <div id='homePageCont'>

        <FeatureSection/>

        <div id='titleCont'>
          <h1>VORTFOLIO's</h1>
          <h1 id='titleFlip'>TOP PICKS</h1>
        </div>

        <CoolProjects/>

        <InterestingPeople/>

        <FilterBar/>

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
