import React, { useReducer, useEffect } from "react";
import { Typography, Avatar, Row, Col } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";

const { Title } = Typography;

const Profile = () => {
  const [state] = useReducer(reducerFunction, initialState);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8} lg={4}>
        <Avatar size={43} icon={<UserOutlined />} style={{ marginTop: 16 }} />
      </Col>
      <Col xs={24} md={8} lg={18}>
        <Title level={4}>
          {state.user?.name ?? "Hey there!"}
          <EditOutlined />
        </Title>
      </Col>
    </Row>
  );
};

export default Profile;
