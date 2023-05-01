export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_APPLICATION_DATA":
      return {
        ...state,
        user: action.payload.user,
        categories: action.payload.categories,
        tasks: action.payload.tasks,
      };
    case "EDIT_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
