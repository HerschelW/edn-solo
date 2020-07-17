import { combineReducers } from "redux";

// Used to store posts returned from the server
const profile = (
  state = [
    {
      bio: "",
    },
  ],
  action
) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail of the post that is selected
const profileLinks = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_LINKS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the current post that is selected
const profilePosts = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  profile,
  profileLinks,
  profilePosts,
});
