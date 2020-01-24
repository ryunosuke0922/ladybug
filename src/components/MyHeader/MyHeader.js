import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";

import styled from "styled-components";

import { Top } from "../Top/Top";
import { About } from "../About/About";
import { Skill } from "../Skill/Skill";

const { Header } = Layout;

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

const Base = styled(Header)`
  text-align: center;
  background: #f0f2f5;
`;

const HeaderMenu = styled(Menu)`
  line-height: 64px;
  background: #f0f2f5;
`;

class MyHeader extends React.Component {
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
        <Base>
          <HeaderMenu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
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
          </HeaderMenu>
        </Base>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/about" exact component={About} />
          <Route path="/skill" exact component={Skill} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
          <Route exact component={Top} />
        </Switch>
      </Router>
    );
  }
}

export default MyHeader;
