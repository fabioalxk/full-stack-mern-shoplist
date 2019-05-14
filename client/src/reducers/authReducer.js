const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    }
    case "LOGIN_SUCCESS": {
      localStorage.setItem("token", action.payload.token);
      return { ...action.payload, isAuthenticated: true };
    }
    case "LOGOUT": {
      localStorage.setItem("token", null);
      return { ...action.payload, user: null, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
