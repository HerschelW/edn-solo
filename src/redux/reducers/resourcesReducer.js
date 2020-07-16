import { combineReducers } from "redux";

// Used to store posts returned from the server
const resources = (state = [], action) => {
  switch (action.type) {
    case "SET_RESOURCES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail of the post that is selected
const resourceDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_RESOURCE_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the current post that is selected
const currentResource = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_RESOURCE":
      return action.payload;
    default:
      return state;
  }
};

const currentResourceId = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_RESOURCE_ID":
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  resources,
  resourceDetail,
  currentResourceId,
  currentResource,
});
