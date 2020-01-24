import React from "react";
import { Typography, Layout, Avatar } from "antd";
import styled from "styled-components";

import icon from "../../assets/imgas/icon.jpg";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;

const AboutTitle = styled(Title)`
  letter-spacing: 4px;
  text-shadow: 1px 1px 1px #000;
`;

const AboutAvatar = styled(Avatar)`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const AboutDate = styled(Text)`
  font-size: 12px;
  padding-left: 12px;
`;

export const About = () => (
  <Base>
    <AboutTitle level={3}>ABOUT ME</AboutTitle>
    <AboutAvatar size={256} src={icon} />
    <br />
    <Text>Ryunosuke Maeda</Text>
    <br />
    <Text>ジョブホッパー気味。</Text>
    <br />
    <Text>五匹の猫と暮らす、猫好き。</Text>
    <div style={{ marginTop: "60px" }}>
      <Text>
        フリーランス Web/スマートフォンアプリ開発
        <AboutDate>2018-08 - 現在</AboutDate>
      </Text>
      <br />
      <Text>
        システム開発会社 プログラマー スマートフォンアプリ開発
        <AboutDate>2018-01 - 2018-07</AboutDate>
      </Text>
      <br />
      <Text>
        医療機器メーカー プログラマー <AboutDate>2017-10 - 2017-12</AboutDate>
      </Text>
      <br />
      <Text>
        ポリゴンマジック株式会社 プログラマー 遊技機の液晶開発
        <AboutDate>2015-04 - 2017-09</AboutDate>
      </Text>
    </div>
  </Base>
);
