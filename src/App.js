import React, { Component } from "react";
import { Layout } from "antd";

import MyHeader from "./components/MyHeader/MyHeader";
import MyFooter from "./components/MyFooter/MyFooter";

import "minireset.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <MyHeader />
        <MyFooter />
      </Layout>
    );
  }
}

export default App;
