import React from "react";
import Categories from "./categories/Categories";
import Tasks from "./tasks/Tasks";
import { Layout } from "antd";
import AppHeader from "./app-header/AppHeader";
import { ACTION_TYPES } from "../reducer/reducerActionTypes";

const { Content } = Layout;

const Pages = () => {
  return (
    <Layout>
      {/* This is the main layout */}
      {/* This is the main header
       */}
      {/* <Header style={{}}>
        <AppHeader />
      </Header> */}
      <Layout
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1.5fr 5fr",
          border: "1px solid #E9E9E9",
        }}
      >
        {/* This is the categories
         */}
        <Content
          style={{
            height: "100%",
            borderRight: "1px solid #E9E9E9",
          }}
        >
          <Categories />
        </Content>
        {/* This is the tasks
         */}
        <Content
          style={{
            height: "100%",
            borderRight: "1px solid #E9E9E9",
          }}
        >
          <Tasks />
        </Content>
        {/* This is the info panel
         */}
        {/* <Content>
          <InfoPanel />
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default Pages;
