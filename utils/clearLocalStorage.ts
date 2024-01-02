export default () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  return true;
};
