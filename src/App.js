import React, { Component } from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";

import MyHeader from "./components/MyHeader/MyHeader";
import MyFooter from "./components/MyFooter/MyFooter";

import "minireset.css";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{
            lang: "ja"
          }}
          title="ポートフォリオ"
          meta={[
            { charSet: "utf-8" },
            { name: "description", content: "ポートフォリオ Sample です" }
          ]}
        />
        <Layout>
          <MyHeader />
          <MyFooter />
        </Layout>
      </div>
    );
  }
}

export default App;
