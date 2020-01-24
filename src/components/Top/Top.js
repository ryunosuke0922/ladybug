import React from "react";
import { Typography, Layout } from "antd";

import bg from "../../assets/imgas/header-bg.png";

const { Title } = Typography;
const { Content } = Layout;

export const Top = () => (
  <Content
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
    <Title
      style={{
        paddingTop: "160px",
        letterSpacing: "4px",
        color: "#fff",
        textShadow: "2px 2px 2px #000"
      }}
    >
      Ryunosuke Maeda
    </Title>
    <Title
      level={3}
      style={{
        letterSpacing: "4px",
        color: "#fff",
        textShadow: "2px 2px 2px #000"
      }}
    >
      Web Engineer
    </Title>
  </Content>
);
