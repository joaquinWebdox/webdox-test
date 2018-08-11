const initialState = {
  logged: false,
  token: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        logged: action.logged,
        token: action.token
      };
    case "LOGOUT":
      return {
        logged: false,
        token: ""
      };
    default:
      return state;
  }
};

export default rootReducer;
