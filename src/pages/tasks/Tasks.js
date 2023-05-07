import React, { useState, useReducer } from "react";
import { Input, List, Row, Col, Divider, Typography, Checkbox } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";
import { generateRandomId } from "../../utils/idGenerator";
import InfoPanel from "./InfoPanel";

const { Title, Text } = Typography;

const Tasks = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [inputValue, setInputValue] = useState("");
  //temporary state
  const [infoPanelVisibility, setInfoPanelVisibility] = useState(false);

  let tasks = state.tasks;

  const handleAddTask = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: {
        task: {
          id: generateRandomId(),
          name: inputValue,
          completed: false,
          category: "good",
        },
      },
    });
    setInputValue("");
  };

  return (
    <Row
      style={{
        overflow: "hidden",
        padding: "1.5rem",
        backgroundColor: "#3ab7ff",
      }}
    >
      <Title level={4}>Tasks</Title>
      <Col span={24}>
        <List
          style={{
            height: "78vh",
          }}
          dataSource={tasks}
          renderItem={(task, index) => (
            // <List.Item
            //   key={index}
            //   style={{
            //     cursor: "pointer",
            //     // borderBottom: "1px solid #f0f0f0",
            //     padding: "12px 10px",
            //   }}
            // >
            <Row
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                padding: "8px 16px",
                width: "100%",
                marginBottom: "8px",
                marginTop: "5px",
              }}
            >
              <Col span={1}>
                <Checkbox
                  style={{
                    color: task.completed ? "green" : "gray",
                  }}
                  // style={{
                  //   color: task.completed ? "green" : "gray",
                  // }}
                  // onClick={() => {
                  //   dispatch({
                  //     type: ACTION_TYPES.TOGGLE_TASK,
                  //     payload: {
                  //       taskId: task.id,
                  //     },
                  //   });
                  // }}
                />
              </Col>
              <Col
                span={22}
                onClick={() => {
                  setInfoPanelVisibility(true);
                  // dispatch({
                  //   type: ACTION_TYPES.OPEN_INFO_PANEL,
                  // });
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <Text
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    fontSize: 14,
                    fontWeight: 500,
                    // marginLeft: "2rem",
                  }}
                >
                  {task.name}
                </Text>
              </Col>
            </Row>
            // </List.Item>
          )}
        />
      </Col>
      <Col span={24}>
        <Divider />
        <Input
          placeholder="Enter a new task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          suffix={
            <>
              {inputValue !== "" ? (
                <CheckOutlined
                  style={{ color: "green" }}
                  onClick={() => handleAddTask()}
                />
              ) : (
                <CheckOutlined style={{ color: "gray" }} />
              )}
            </>
          }
          onPressEnter={() => handleAddTask()}
        />
      </Col>
      <InfoPanel
        setInfoPanelVisibility={setInfoPanelVisibility}
        infoPanelVisibility={infoPanelVisibility}
      />
    </Row>
  );
};

export default Tasks;
