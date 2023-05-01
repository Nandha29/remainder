import React, { useReducer, useEffect } from "react";
import { Typography, Avatar, Row, Col } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";

const { Title } = Typography;

const Profile = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  // Get the application data from the local storage
  let applicationData = localStorage.getItem("applicationData");
  applicationData = JSON.parse(applicationData);

  useEffect(() => {
    if (!applicationData) {
      localStorage.setItem(
        "applicationData",
        JSON.stringify({
          user: {
            name: "Hey there!",
          },
          categories: [],
          tasks: [],
        })
      );
      return;
    }
    // Set the application data in the global context
    dispatch({
      type: ACTION_TYPES.SET_APPLICATION_DATA,
      payload: applicationData,
    });
  }, []);

  console.log(state);
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8} lg={4}>
        <Avatar size={50} icon={<UserOutlined />} />
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
