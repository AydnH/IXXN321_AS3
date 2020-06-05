import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/homePage";
import Login from "./components/pages/login";
import projectPage from "./components/pages/projectPage";
import projectUploaderPage from "./components/pages/projectUploadPage";
import userPage from "./components/pages/userPage";

import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* make our own header */}
        <header className="App-header"></header>
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
