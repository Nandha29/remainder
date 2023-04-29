import React from "react";
import { Typography, Row, Col, Input } from "antd";
import Profile from "./Profile";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Categories = () => {
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      style={{
        padding: 12,
      }}
    >
      <Col span={24}>
        <Profile />
      </Col>
      <Col span={24}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search category"
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
      </Col>
      <Col span={24}>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>
      </Col>
    </Row>
  );
};

export default Categories;
