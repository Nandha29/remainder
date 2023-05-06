import React, { useEffect, useReducer } from "react";
import { Button, Dropdown, Menu, Typography, Drawer, Card } from "antd";
import { ClockCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { BsAlarm } from "react-icons/bs";
import { MdAlarmAdd } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { initialState } from "../../context/globalContext";
import { reducerFunction } from "../../reducer/reducer";
import { ACTION_TYPES } from "../../reducer/reducerActionTypes";
import { quotes } from "../../constants/enums";

const { Title, Text } = Typography;

const InfoPanel = ({ infoPanelVisibility, setInfoPanelVisibility }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const reminderDuration = state.reminderDuration;

  const menu = (
    <Menu
      onClick={(e) => {
        dispatch({
          type: ACTION_TYPES.SET_REMAINDER_DURATION,
          payload: { reminderDuration: e.key },
        });
      }}
    >
      <Menu.Item key="15 mins">15 mins</Menu.Item>
      <Menu.Item key="30 mins">30 mins</Menu.Item>
      <Menu.Item key="1 hour">1 hour</Menu.Item>
    </Menu>
  );

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    let interval = null;
    if (reminderDuration) {
      interval = setInterval(() => {
        if (Notification.permission !== "granted")
          Notification.requestPermission();
        else {
          const notification = new Notification("Om Shanthi", {
            icon: "/images/aathma.png",
            body: getRandomQuote(),
          });
        }
        //play sound
        const audio = new Audio(
          "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        ).play();
      }, getDurationInMilliseconds());
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [reminderDuration]);

  const getDurationInMilliseconds = () => {
    switch (reminderDuration) {
      case "15 mins":
        return 15 * 60 * 1000;
      case "30 mins":
        return 30 * 60 * 1000;
      case "1 hour":
        return 60 * 60 * 1000;
      default:
        return 15 * 60 * 1000;
    }
  };

  return (
    <Drawer
      visible={infoPanelVisibility}
      onClose={() => {
        setInfoPanelVisibility(false);
      }}
      maskClosable={true}
      title="Task Info"
    >
      <Card
        style={{
          width: "100%",
          borderRadius: 10,
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
        title={
          <Title level={5}>
            <BsAlarm style={{ fontSize: "17px" }} />
            {"  "}
            {
              <Text style={{ fontSize: "16px" }}>
                {reminderDuration ? "Remainder Started" : "Remind Me"}
              </Text>
            }
          </Title>
        }
      >
        {reminderDuration === 0 ? (
          <>
            <Text>Select the duration for the reminder</Text>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button
                style={{ marginTop: 10 }}
                danger
                type="primary"
                icon={
                  <ClockCircleOutlined
                    style={{
                      fontSize: "17px",
                      marginRight: "5px",
                    }}
                  />
                }
              >
                Select duration
              </Button>
            </Dropdown>
          </>
        ) : (
          <Text
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            You will be reminded every {reminderDuration}
            <CloseOutlined
              style={{ fontSize: "16px" }}
              onClick={() => {
                dispatch({
                  type: ACTION_TYPES.SET_REMAINDER_DURATION,
                  payload: { reminderDuration: 0 },
                });
              }}
            />
          </Text>
        )}
      </Card>

      <Card
        style={{
          width: "100%",
          borderRadius: 10,
          borderColor: "#fadb14",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          marginTop: 20,
        }}
        title={
          <Title level={5}>
            <TbBulbFilled
              style={{ fontSize: "20px", marginRight: "5px", color: "#fadb14" }}
            />

            <Text style={{ fontSize: "16px" }}>Tip</Text>
          </Title>
        }
      >
        <Text>
          The happiness of your life depends upon the quality of your thoughts.
        </Text>
      </Card>
    </Drawer>
  );
};

export default InfoPanel;
