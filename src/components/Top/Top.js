import React from "react";
import { Typography, Layout } from "antd";
import bg from "../../assets/imgas/header-bg.png";

const { Content } = Layout;
const { Title } = Typography;

export const Top = () => (
  <Layout
    style={{
      width: "100%",
      minHeight: "700px",
      textAlign: "center",
      backgroundAttachment: "relative",
      backgroundPosition: "center center",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover"
    }}
  >
    <Content style={{ margin: "60px 16px" }}>
      <Title
        style={{
          marginTop: "150px",
          letterSpacing: "0px",
          color: "#ffffff",
          textShadow: "2px 2px 2px #000"
        }}
      >
        Ryunosuke Maeda
      </Title>
      <Title
        level={3}
        style={{
          letterSpacing: "0px",
          color: "#ffffff",
          textShadow: "2px 2px 2px #000"
        }}
      >
        Web Engineer
      </Title>
    </Content>
  </Layout>
);
