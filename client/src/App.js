import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./components/pages/js/homePage";
import Login from "./components/pages/js/login";
import projectPage from "./components/pages/js/projectPage";
import projectUploaderPage from "./components/pages/js/projectUploadPage";
import userPage from "./components/pages/js/userPage";

import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Redirect from="/" to="/Home" /> */}
        <div className="appBody">
          {/* page components render in here */}

          <Route path="/Home" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/projectPage" exact component={projectPage} />
          <Route
            path="/projectUploaderPage"
            exact
            component={projectUploaderPage}
          />
          <Route path="/userPage" exact component={userPage} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
