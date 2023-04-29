import React from "react";
import { Layout, Typography, Avatar, Row, Col, Space } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Profile = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8} lg={4}>
        <Avatar size={50} icon={<UserOutlined />} />
      </Col>
      <Col xs={24} md={8} lg={18}>
        <Title level={4}>
          Nandha Kumar <EditOutlined />
        </Title>
      </Col>
    </Row>
  );
};

export default Profile;
