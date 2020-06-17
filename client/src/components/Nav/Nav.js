import React from "react";
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

            <a className="navLeft login">
                LOGIN
                <Route path="/Login" exact component={Login} />
            </a>

            <a className="navLeft upload">
                Upload
                <Route path="/projectUploaderPage" exact component={projectUploaderPage} />
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
