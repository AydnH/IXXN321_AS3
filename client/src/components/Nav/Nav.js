import React from "react";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navCont">
        <div>
          <a href="" className="navLeft login">
            Login
          </a>
          <a href="" className="navLeft upload">
            Upload
          </a>
        </div>

        <div>
          <a href="" className="navRight people">
            People
          </a>
          <a href="" className="navRight projects">
            Projects
          </a>
          <a href="" className="navRight archive">
            Archive
          </a>
        </div>
      </div>
    );
  }
}
