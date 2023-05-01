import React, { useReducer } from "react";
import { Button, Input, List, Row, Col, Divider, Drawer } from "antd";
import {
  CloseOutlined,
  SearchOutlined,
  PlusOutlined,
  CheckOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const InfoPanel = ({ visiblity }) => {
  return (
    <Drawer open={visiblity}>
      <Row>
        <Col span={24}>
          <ClockCircleOutlined /> Remind me
        </Col>
      </Row>
    </Drawer>
  );
};

export default InfoPanel;
