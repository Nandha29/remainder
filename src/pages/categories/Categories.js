import React, { useReducer, useState } from "react";
import {
  Typography,
  Row,
  Col,
  Input,
  Button,
  Divider,
  Modal,
  Empty,
} from "antd";
import Profile from "./Profile";
import {
  CloseOutlined,
  SearchOutlined,
  PlusOutlined,
  CheckOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";
import { generateRandomId } from "../../utils/idGenerator";

const { Text } = Typography;
const { confirm } = Modal;

const Categories = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [categoryValue, setCategoryValue] = useState("");
  const [mouseHoveredCategory, setMouseHoveredCategory] = useState(null);

  const handleAddCategory = () => {
    dispatch({
      type: "ADD_CATEGORY",
      payload: {
        category: {
          id: generateRandomId(),
          name: categoryValue,
        },
      },
    });
    dispatch({
      type: "SHOW_CATEGORY_INPUT",
      payload: {
        showCategoryInput: false,
      },
    });
    setCategoryValue("");
  };
  console.log(state);
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      style={{
        padding: 12,
      }}
    >
      {/* This is profile */}
      <Col span={24}>
        <Profile />
      </Col>

      {/* This is search category */}
      <Col
        span={24}
        style={{
          padding: "7px 7px",
          borderBottom: "1px solid #E9E9E9",
        }}
      >
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search category"
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
      </Col>

      {/* This is categories */}
      <Col
        span={24}
        style={{ height: "66vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <Row gutter={[0, 13]}>
          {state.categories.map((category, index) => {
            return (
              <Col
                span={24}
                style={{
                  padding: "0px 6px",
                  borderBottom: "1px solid #E9E9E9",
                }}
                onMouseEnter={() => setMouseHoveredCategory(category.name)}
                onMouseLeave={() => setMouseHoveredCategory(null)}
              >
                <Text key={index}>
                  {index + 1}. {category.name}
                </Text>

                {/* This is delete button */}
                {mouseHoveredCategory === category.name && (
                  <DeleteOutlined
                    style={{
                      float: "right",
                      color: "#faad14",
                      marginTop: 3,
                    }}
                    onClick={() => {
                      confirm({
                        title: "Are you sure you want to delete this category?",
                        icon: <DeleteOutlined />,
                        okText: "Yes",
                        okType: "danger",
                        cancelText: "No",
                        onOk() {
                          dispatch({
                            type: ACTION_TYPES.DELETE_CATEGORY,
                            payload: {
                              category,
                            },
                          });
                        },
                        onCancel() {},
                      });
                    }}
                  />
                )}
              </Col>
            );
          })}
        </Row>

        {state.categories.length === 0 && !state.showCategoryInput && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No category found"
          />
        )}

        {/* This is input category */}
        {state.showCategoryInput && (
          <Input
            autoFocus
            style={{ width: "100%" }}
            placeholder="Enter category name"
            allowClear={{ clearIcon: <CloseOutlined /> }}
            onChange={(e) => setCategoryValue(e.target.value)}
            suffix={
              <CheckOutlined
                style={{ color: "green" }}
                onClick={() => handleAddCategory()}
              />
            }
            onPressEnter={() => handleAddCategory()}
          />
        )}
      </Col>

      {/* This is show category */}
      <Col span={24} style={{ bottom: 5 }}>
        <Divider />
        <Button
          icon={<PlusOutlined />}
          style={{ width: "100%" }}
          onClick={() => {
            dispatch({
              type: "SHOW_CATEGORY_INPUT",
              payload: {
                showCategoryInput: true,
              },
            });
          }}
        >
          New list
        </Button>
      </Col>
    </Row>
  );
};

export default Categories;
