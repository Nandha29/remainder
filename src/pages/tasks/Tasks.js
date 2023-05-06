import React, { useState, useReducer } from "react";
import { Input, List, Row, Col, Divider, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";
import { generateRandomId } from "../../utils/idGenerator";
import InfoPanel from "./InfoPanel";

const { Title } = Typography;

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
            <List.Item
              key={index}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setInfoPanelVisibility(true);
                // dispatch({
                //   type: ACTION_TYPES.OPEN_INFO_PANEL,
                // });
              }}
            >
              {task.name}
            </List.Item>
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
