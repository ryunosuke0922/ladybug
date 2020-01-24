import React from "react";
import { Typography, Layout, Avatar } from "antd";
import styled from "styled-components";

import icon from "../../assets/imgas/icon.jpg";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;

const SkillTitle = styled(Title)`
  letter-spacing: 4px;
`;

export const Skill = () => (
  <Base>
    <SkillTitle level={3}>SKILL</SkillTitle>
    <div style={{ marginTop: "60px" }}>
      <Title level={4}>業務で使用した言語 / Framework</Title>
      <Text>HTML/CSS | JavaScript</Text>
      <Text>jQuery</Text>
    </div>
    <div style={{ marginTop: "30px" }}>
      <Title level={4}>業務外(学生時代など)</Title>
      <Text>C | C++</Text>
      <br />
      <Text>DirectX</Text>
    </div>
  </Base>
);
