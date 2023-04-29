import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: "green" }}>
      <Title style={{ margin: 0 }}>Your Reminder App</Title>
    </Header>
  );
};

export default AppHeader;
