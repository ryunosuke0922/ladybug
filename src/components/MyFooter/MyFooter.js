import React from "react";
import { Typography, Layout } from "antd";

const { Text } = Typography;
const { Footer } = Layout;

class MyFooter extends React.Component {
  render() {
    return (
      <Footer
        style={{
          textAlign: "center",
          padding: "16px 0"
        }}
      >
        <Text>
          &copy; Copyrights <strong>Ryunosuke</strong>. All Rights Reserved
        </Text>
      </Footer>
    );
  }
}

export default MyFooter;
