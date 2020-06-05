import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/homePage";
import Login from "./components/pages/login";
import Page2 from "./components/pages/page2";
import Page3 from "./components/pages/page3";
import Page4 from "./components/pages/page4";

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
          <Route path="/Page2" exact component={Page2} />
          <Route path="/Page3" exact component={Page3} />
          <Route path="/Page4" exact component={Page4} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
