import React from "react";
import "../css/MediaProjects.css";

export default function MediaProjects() {
  return (
    <div id="MediaCont">
      <div className="titleCont">
        <h1 className="disciplineTitle">Media</h1>
        <h1 className="titleFlip">projects</h1>
      </div>

      <div id="MediaProjectsCont">
        <div className="ProjectCont MediaPro1">
          <div className="MediaHoverInfo">
            <h1>Cool Project Name</h1>
            <p>Firstname Lastname</p>
          </div>
        </div>

        <div className="ProjectCont MediaPro2">
          <div className="MediaHoverInfo">
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
