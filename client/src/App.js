import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/homePage/js/homePage";
import Login from "./components/pages/js/login";
import ProjectPage from "./components/pages/js/projectPage";
import projectUploaderPage from "./components/pages/js/projectUploadPage";
import ProjectUpload1 from "./components/pages/ProjectUpload/ProjectUpload1"
import ProjectUpload2 from "./components/pages/ProjectUpload/ProjectUpload2"
import ProjectUpload3 from "./components/pages/ProjectUpload/ProjectUpload3"
import userPage from "../src/components/pages/userPage/userPage";
import Nav from "../src/components/Nav/Nav";

import "./App.css";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Redirect from="/" to="/Home" />
        <div className="appBody">
          {/* page components render in here */}
          <Nav />
          <Route path="/Home" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/projectPage" exact component={ProjectPage} />
          <Route
            path="/projectUploaderPage"
            exact
            component={projectUploaderPage}
          />
          <Route path="/projectUpload1" exact component={ProjectUpload1} />
          <Route path="/projectUpload2" exact component={ProjectUpload2} />
          <Route path="/projectUpload3" exact component={ProjectUpload3} />
          <Route path="/userPage" exact component={userPage} />
          <Route path="/SignUp" exact component={SignUp} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
