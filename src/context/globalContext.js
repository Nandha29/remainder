// Load the initial state from local storage
let applicationData = localStorage.getItem("applicationData");
applicationData = JSON.parse(applicationData);

export const initialState = {
  user: applicationData?.user,
  categories: applicationData?.categories ?? [],
  tasks: applicationData?.tasks ?? [],
  showCategoryInput: false,
  searchCategory: "",
  infoPanelVisibility: false,
  reminderDuration: 0,
};
