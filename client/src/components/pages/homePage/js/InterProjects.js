import React from "react";
import "../css/InterProjects.css";

export default function InterProjects() {
  return (
    <div id="InterCont">
      <div className="titleCont">
        <h1 className="disciplineTitle">Interaction</h1>
        <h1 className="titleFlip">projects</h1>
      </div>

      <div id="InterProjectsCont">
        <div className="ProjectCont InterPro1">
          <div className="InterHoverInfo">
            <h1>Cool Project Name</h1>
            <p>Firstname Lastname</p>
          </div>
        </div>

        <div className="ProjectCont InterPro2">
          <div className="InterHoverInfo">
            <h1>Cool Project Name</h1>
            <p>Firstname Lastname</p>
          </div>
        </div>

        <div className="ProjectCont InterPro3">
          <div className="InterHoverInfo">
            <h1>Cool Project Name</h1>
            <p>Firstname Lastname</p>
          </div>
        </div>

        <div className="ProjectCont InterPro4">
          <div className="InterHoverInfo">
            <h1>Cool Project Name</h1>
            <p>Firstname Lastname</p>
          </div>
        </div>
      </div>

      <a className="cta" href="/">
        View More
      </a>
    </div>
  );
}
