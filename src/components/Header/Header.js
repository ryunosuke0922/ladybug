import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu, Icon, Row, Col } from "antd";

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

class Header extends React.Component {
  state = {
    current: "top"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Router>
        <Row
          style={{
            maxWidth: "1200px",
            textAlign: "center",
            margin: "0 auto"
          }}
        >
          <Col xs={8}>
            <h1 style={{ lineHeight: "64px" }}>Portfolio</h1>
          </Col>
          <Col xs={14}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="top">
                <Link to="/">
                  <Icon type="user" />
                  Top
                </Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">
                  <Icon type="monitor" />
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="skill">
                <Link to="/skill">
                  <Icon type="solution" />
                  Skill
                </Link>
              </Menu.Item>
              <Menu.Item key="works">
                <Link to="/works">
                  <Icon type="shopping" />
                  Works
                </Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">
                  <Icon type="mail" />
                  Contact
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <div style={{ padding: "80px" }}>
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
  }
}

export default Header;
