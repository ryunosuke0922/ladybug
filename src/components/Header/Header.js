import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Top = () => (
  <div>
    <h1>Top</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

const Skill = () => (
  <div>
    <h1>Skill</h1>
  </div>
);

const Works = () => (
  <div>
    <h1>Works</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
);

const Header = () => {
  return (
    <Router>
      <div>
        <h1>Portfolio</h1>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div style={{ padding: "120px" }}>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/about" exact component={About} />
          <Route path="/skill" exact component={Skill} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
          <Route exact component={Top} />
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
