import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// function to get Posts
function* fetchProfile(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/profile/`);
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_PROFILE", payload: response.data });
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to get Profile from server");
  }
}

function* fetchUserLinks(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/profile/links/`);
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_USER_LINKS", payload: response.data });
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to get links from server");
  }
}

function* fetchUserPosts(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/profile/posts/`);
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_USER_POSTS", payload: response.data });
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to get user posts from server");
  }
}

function* profileSaga() {
  yield takeEvery("FETCH_PROFILE", fetchProfile);
  yield takeEvery("FETCH_USER_LINKS", fetchUserLinks);
  yield takeEvery("FETCH_USER_POSTS", fetchUserPosts);
}

export default profileSaga;
