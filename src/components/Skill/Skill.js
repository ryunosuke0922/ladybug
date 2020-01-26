import React from "react";
import { Typography, Layout, Card, Row, Col } from "antd";
import styled from "styled-components";

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
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "120px",
          paddingRight: "120px"
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="ReactNative" bordered={false}>
              <p>ニュースアプリ 1年</p>
              <p>業務アプリ 3ヶ月</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="C/C++" bordered={false}>
              <p>遊技機開発 1年半</p>
              <p>遊技機開発 1年</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Laracel" bordered={false}>
              <p>業務アプリ ３ヶ月</p>
            </Card>
          </Col>
        </Row>
      </div>
      <Text>
        HTML/CSS | C | C++ | Java | PHP | JavaScript | Objective-C | Ruby |
        VB.NET
      </Text>
      <br />

      <Text>
        Laravel | ReactNative | Ruby on Rails | jQuery | Vue.js | .NET Framerowk
      </Text>
    </div>
    <div style={{ marginTop: "30px" }}>
      <Title level={4}>業務外(学生時代など)</Title>
      <Text>C# | C | C++ | Python</Text>
      <br />
      <Text>Unity | DirectX</Text>
    </div>
  </Base>
);
