import React from "react";
import PageOne from "../src/pages/page1/PageOne";
import PageTwo from "../src/pages/page2/PageTwo";
import PageThree from "../src/pages/page3/PageThree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PageOne} />
          {/* <Route path="/page2" exact component={PageTwo} />
          <Route path="/page3" exact component={PageThree} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
