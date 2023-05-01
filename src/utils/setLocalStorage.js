export const setLocalStorage = (state) => {
  localStorage.setItem("applicationData", JSON.stringify(state));
};
