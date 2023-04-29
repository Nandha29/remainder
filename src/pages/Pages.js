import React from "react";
import Categories from "./categories/Categories";
import Tasks from "./tasks/Tasks";
import InfoPanel from "./info-panel/InfoPanel";

const Pages = () => {
  return (
    <div>
      <Categories />
      <Tasks />
      <InfoPanel />
    </div>
  );
};

export default Pages;
