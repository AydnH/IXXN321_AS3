import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navCont">
        <div>

          <Link to="./Login" className="navLeft login">LOGIN</Link>

          <Link to="./projectUploaderPage" className="navLeft upload">Upload</Link>

        </div>

        <Link to="./home" className="homeSvg">
          <svg className="homeLink" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path/>
          </svg>
        </Link>

        <div>

          <Link to="./home" className="navRight people">People</Link>
          
          <Link to="./home" className="navRight projects">Projects</Link>

          <Link to="./home" className="navRight archive">Archive</Link>

        </div>
      </div>
    );
  }
}
