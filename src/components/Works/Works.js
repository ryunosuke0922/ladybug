import React from "react";
import { Typography, Layout, List } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;

const WorksTitle = styled(Title)`
  letter-spacing: 4px;
`;

const data1 = [
  "Laravel | PHP 業務改善Webアプリケーション 3ヶ月",
  "iOS / Android | ReactNative | JavaScript イベントアプリ 半年",
  "iOS / Android | ReactNative | JavaScript イベントアプリ 1年"
];

const data2 = [
  "iOS / Android | Objective-C / Java / C/C++ パチンコ、パチスロのネイティブアプリ開発",
  "アニメ版権 | 独自基盤 | C/C++ 遊技機の液晶開発 1年半",
  "オリジナル版権 | 独自基盤 | C/C++ 遊技機の液晶開発 1年半"
];

export const Works = () => (
  <Base>
    <WorksTitle level={3}>Works</WorksTitle>
    <div style={{ marginTop: "60px" }}>
      <Title level={4}>現職</Title>
      <List
        bordered
        dataSource={data1}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
    <div style={{ marginTop: "30px" }}>
      <Title level={4}>前職</Title>
      <List
        bordered
        dataSource={data2}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  </Base>
);
