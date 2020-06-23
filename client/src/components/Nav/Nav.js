import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// import Home from "../pages/homePage/js/homePage";
import Login from "../pages/SignUp/SignUp";
// import ProjectPage from "./pages/js/projectPage";
import projectUploaderPage from "../pages/js/projectUploadPage";
// import userPage from "./pages/userPage/userPage";

import { HashRouter, Route, Redirect } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navCont">
        <div>
          <Link className="navLeft login" to="/Login">
            LOGIN
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
