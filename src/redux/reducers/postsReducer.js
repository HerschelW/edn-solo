import { combineReducers } from "redux";

// Used to store posts returned from the server
const posts = (state = [], action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail of the post that is selected
const postDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_POST_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the current post that is selected
const currentPost = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_POST":
      return action.payload;
    default:
      return state;
  }
};

const currentPostId = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_POST_ID":
      return action.payload;
    default:
      return state;
  }
};

const postAuthor = (state = [], action) => {
  switch (action.type) {
    case "SET_POST_AUTHOR":
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  posts,
  postDetail,
  currentPostId,
  currentPost,
  postAuthor,
});
