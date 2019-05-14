import axios from "axios";

export const userLoadingAction = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  config.headers["x-auth-token"] = getState().auth.token;

  axios
    .get("/api/auth/user", config)
    .then(res => {
      console.log("auth/user", res.data);
      dispatch({
        type: "USER_LOADING",
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const loginAction = (email, password) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  console.log("Body", body);
  axios
    .post("/api/auth/", body, config)
    .then(res => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      const errorPayload = {
        msg: err.response.data.msg,
        status: err.response.status,
        id: "LOGIN_FAIL"
      };

      console.log(errorPayload);
      dispatch({
        type: "LOAD_ERRORS",
        payload: errorPayload
      });
    });
};

export const logoutAction = () => dispatch => {
  dispatch({
    type: "LOGOUT"
  });
  dispatch({
    type: "CLEAR_ERRORS"
  });
};
