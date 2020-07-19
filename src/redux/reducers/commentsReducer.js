import { combineReducers } from "redux";

// Used to store post comments returned from the server
const postComments = (state = null, action) => {
  const newState = action.payload;
  switch (action.type) {
    case "SET_POST_COMMENTS":
      return [...newState];
    default:
      return state;
  }
};

const resourceComments = (state = null, action) => {
  const newState = action.payload;
  switch (action.type) {
    case "SET_RESOURCE_COMMENTS":
      return state, newState;
    default:
      return state;
  }
};

export default combineReducers({
  postComments,
  resourceComments,
});
