import React from "react";
import Pages from "../pages/Pages";
import { useReducer, useEffect } from "react";
import { reducerFunction } from "../reducer/reducer";
import { initialState } from "../context/globalContext";
import { ACTION_TYPES } from "../reducer/reducerActionTypes";

const AppContainer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <Pages />
    </div>
  );
};

export default AppContainer;
