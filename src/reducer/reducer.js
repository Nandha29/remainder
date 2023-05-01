import { setLocalStorage } from "../utils/setLocalStorage";

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

    case "SHOW_CATEGORY_INPUT":
      return {
        ...state,
        showCategoryInput: action.payload.showCategoryInput,
      };

    case "ADD_CATEGORY":
      const newCategory = action.payload.category;
      const updatedCategories = [...state.categories, newCategory];
      const updatedState = {
        ...state,
        categories: updatedCategories,
      };
      setLocalStorage(updatedState);

      return updatedState;

    case "DELETE_CATEGORY":
      const categoryToDelete = action.payload.category;
      const filteredCategories = state.categories.filter(
        (category) => category.id !== categoryToDelete.id
      );
      const updatedStateAfterDelete = {
        ...state,
        categories: filteredCategories,
      };
      setLocalStorage(updatedStateAfterDelete);
      return updatedStateAfterDelete;

    case "SEARCH_CATEGORY":
      return {
        ...state,
        searchCategory: action.payload.searchCategory,
      };

    default:
      return state;
  }
};
