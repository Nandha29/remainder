export const generateRandomId = () => {
  const randomNumber = Math.random().toString().replace(".", "");
  const randomId = randomNumber;
  return randomId;
};
