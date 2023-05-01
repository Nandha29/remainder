import React, { useState, useReducer } from "react";
import { Button, Input, List, Row, Col, Divider, Drawer } from "antd";
import {
  CloseOutlined,
  SearchOutlined,
  PlusOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";
import { generateRandomId } from "../../utils/idGenerator";
import InfoPanel from "./InfoPanel";

const Tasks = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [inputValue, setInputValue] = useState("");

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
      {console.log("visiblity11", state.infoPanelVisibility)}
      <h1>Tasks</h1>
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
                dispatch({
                  type: ACTION_TYPES.OPEN_INFO_PANEL,
                });
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
      <InfoPanel visiblity={state.infoPanelVisibility} />
    </Row>
  );
};

export default Tasks;
