import React from "react";
import { Typography, Layout } from "antd";
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

const WorksDate = styled(Text)`
  font-size: 12px;
  padding-left: 12px;
`;

export const Works = () => (
  <Base>
    <WorksTitle level={3}>Works</WorksTitle>
    <div style={{ marginTop: "60px" }}>
      <Title level={4}>現職</Title>
      <Text>
        Laravel | PHP 業務改善Webアプリケーション
        <WorksDate>3ヶ月</WorksDate>
      </Text>
      <br />
      <Text>
        iOS / Android | ReactNative | JavaScript イベントアプリ
        <WorksDate>半年</WorksDate>
      </Text>
      <br />
      <Text>
        iOS / Android | ReactNative | JavaScript イベントアプリ
        <WorksDate>1年</WorksDate>
      </Text>
    </div>
    <div style={{ marginTop: "30px" }}>
      <Title level={4}>会社員時代</Title>
      <Text>
        iOS / Android | Objective-C / Java / C/C++
        パチンコ、パチスロのネイティブアプリ開発
        <WorksDate>8ヶ月</WorksDate>
      </Text>
      <br />
      <Text>
        アニメ版権 | 独自基盤 | C/C++ 遊技機の液晶開発
        <WorksDate>1年半</WorksDate>
      </Text>
      <br />
      <Text>
        オリジナル版権 | 独自基盤 | C/C++ 遊技機の液晶開発
        <WorksDate>1年半</WorksDate>
      </Text>
    </div>
  </Base>
);
