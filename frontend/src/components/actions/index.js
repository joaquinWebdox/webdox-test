export const createSession = login => {
  return {
    type: "LOGIN",
    logged: true,
    token: login.token
  };
};

export const destroySession = () => {
  return {
    type: "LOGOUT",
    logged: false,
    token: ""
  };
};
