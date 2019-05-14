const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_LOADING": {
      return [...action.payload, ...state];
    }
    case "ADD_ITEM": {
      return [action.payload, ...state];
    }

    case "DELETE_ITEM": {
      return state.filter(item => item._id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;
