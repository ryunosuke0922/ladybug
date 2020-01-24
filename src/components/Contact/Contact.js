import React from "react";
import { Typography, Layout, Avatar } from "antd";
import styled from "styled-components";

import icon from "../../assets/imgas/icon.jpg";

const { Title } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 600px;
  text-align: center;
`;

const ContactAvatar = styled(Avatar)`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const ContactTitle = styled(Title)`
  letter-spacing: 4px;
`;

export const Contact = () => (
  <Base>
    <ContactTitle level={3}>Contact</ContactTitle>
    <div style={{ marginTop: "60px" }}>
      <a href="https://twitter.com/ryunosuke0922">
        <ContactAvatar size={256} src={icon} />
      </a>
      <a href="https://twitter.com/ryunosuke0922">
        <p>Twitter</p>
      </a>
      <a href="https://qiita.com/ryunosuke0922">
        <p>Qiita</p>
      </a>
      <a href="https://www.instagram.com/_ryunosuke0922/">
        <p>Instagram</p>
      </a>
    </div>
  </Base>
);
