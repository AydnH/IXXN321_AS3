import React from "react";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navCont">
        <div id="navleft">
          <a href="" className="navDark login">
            Login
          </a>
          <a href="" className="navDark upload">
            Upload
          </a>
        </div>

        <div id="navright">
          <a href="" className="navLight">
            People
          </a>
          <a href="" className="navLight">
            Projects
          </a>
          <a href="" className="navLight">
            Archive
          </a>
        </div>
      </div>
    );
  }
}
