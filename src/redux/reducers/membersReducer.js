import { combineReducers } from "redux";

const members = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return action.payload;
    default:
      return state;
  }
};

const setMember = (state = {}, action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({ members, setMember });
