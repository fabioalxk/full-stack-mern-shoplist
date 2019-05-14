import axios from "axios";

export const initialLoadingAction = () => dispatch => {
  console.log("initialLoadingAction");

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmNlOWZlYmU4ZTYzMjMwNGY3MDgyYSIsImlhdCI6MTU1NTkzODk1NH0._p2apNE_t8cyolgpFJxtzecB6P5ojpPjOBg9qf0Isbc"
  );

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .get(`/api/items/`, config)
    .then(res => {
      dispatch({
        type: "INITIAL_LOADING",
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteItemAction = _id => (dispatch, getState) => {
  console.log("deleteItemAction");

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  config.headers["x-auth-token"] = getState().auth.token;

  axios
    .delete(`/api/items/${_id}`, config)
    .then(() => {
      dispatch({
        type: "DELETE_ITEM",
        payload: _id
      });
    })
    .catch(err => console.log(err));
};

export const addItemAction = name => (dispatch, getState) => {
  console.log("addItemAction");

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  config.headers["x-auth-token"] = getState().auth.token;

  const body = JSON.stringify({ name });
  console.log("information", body, config.headers["x-auth-token"]);
  axios
    .post("/api/items/", body, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: "ADD_ITEM",
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
