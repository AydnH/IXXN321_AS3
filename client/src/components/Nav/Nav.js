import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navCont">
        <div>
          <Link className="navLeft login" to="/SignUp">
            SIGN UP
          </Link>

          <Link className="navLeft upload" to="/projectUploaderPage">
            Upload
          </Link>
        </div>

        <div>
          <Link className="navRight people">People</Link>
          <Link className="navRight projects">Projects</Link>
          <Link className="navRight archive">Archive</Link>
        </div>
      </div>
    );
  }
}
