import React from "react";
import ProjectPage1 from "../projectPage/ProjectPage1";
import ProjectPage2 from "../projectPage/ProjectPage2";
import ProjectPage3 from "../projectPage/ProjectPage3";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h1>project page</h1>
          <h2>layout 1, 2 or 3</h2>
          <ProjectPage1/>
          <ProjectPage2/>
          <ProjectPage3/>
          
        </section>
      </div>
    );
  }
}
