import React from "react";
import ProjectPage1 from "../projectPage/ProjectPage1";
import ProjectPage2 from "../projectPage/ProjectPage2";
import ProjectPage3 from "../projectPage/ProjectPage3";

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: "" };
  }

  OnShow = () => {
    switch (this.state.mounted) {
      case "1":
        return <ProjectPage1 />;
      case "2":
        return <ProjectPage2 />;
      case "3":
        return <ProjectPage3 />;
      default:
        return (
          <div>
            <h1>You Have not uploaded a project</h1>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="container">
        <this.OnShow />
      </div>
    );
  }
}
