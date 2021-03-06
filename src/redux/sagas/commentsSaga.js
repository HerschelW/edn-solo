import { takeEvery, put } from "redux-saga/effects";

const { default: Axios } = require("axios");

// function to add Post Comments
function* addPostComment(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/posts/comments", action.payload);
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to add new Post Comment to server", error);
  }
}

// function to add Resource Comments
function* addResourceComment(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/resources/comments", action.payload);
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to add new Resource Comment to server", error);
  }
}

function* fetchPostComments(action) {
  try {
    const response = yield Axios.get(`api/posts/comments/${action.payload}`);

    yield put({ type: "SET_POST_COMMENTS", payload: response.data });
  } catch (error) {
    alert("Unable to get comments from server", error);
  }
}

function* commentsSaga() {
  yield takeEvery("SUBMIT_POST_COMMENT", addPostComment);
  yield takeEvery("SUBMIT_RESOURCE_COMMENT", addResourceComment);
  yield takeEvery("FETCH_POST_COMMENTS", fetchPostComments);
}

export default commentsSaga;
