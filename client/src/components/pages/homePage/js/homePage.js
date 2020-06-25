import React from "react";
import "../css/homePage.css";

import FeatureSection from "./featureSection";
import CoolProjects from "./CoolProjects";
import InterestingPeople from "./InterestingPeople";
import FilterBar from "./FilterBar";
import IndusProjects from "./IndusProjects";
import InterProjects from "./InterProjects";
import MediaProjects from "./MediaProjects";
import GraphProjects from "./GraphProjects";


export default class Home extends React.Component {
  render() {
    return (

      <div className='homePageCont'>

        <FeatureSection/>

        <div className='titleCont'>
          <h1 className='disciplineTitle'>VORTFOLIO's</h1>
          <h1 className='titleFlip'>TOP PICKS</h1>
        </div>

        <CoolProjects/>

        <InterestingPeople/>

        <FilterBar/>

        <IndusProjects/>

        <InterProjects/>

        <MediaProjects/>

        <GraphProjects/>

      </div>
    );
  }
}
