import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// function to get Posts
function* fetchResources(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get("/api/resources");
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_RESOURCES", payload: response.data });
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to get resources from server");
  }
}

// function to get current Post
function* fetchResourcesDetail(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/resources/detail/${action.payload}`);
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_RESOURCES_DETAIL", payload: response.data });
  } catch (error) {
    // console.log('Error fetching posts', error);
    alert("Unable to get resources detail from server");
  }
}

// function to add Posts
function* addResources(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/resources", action.payload);
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to add new Resource to server");
  }
}

// function to get current Post
function* fetchCurrentResource(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/resources/${action.payload}`);
    // const result = yield call(axios.get, '/post');
    yield put({ type: "SET_CURRENT_RESOURCE", payload: response.data });
  } catch (error) {
    // console.log('Error fetching posts', error);
    alert("Unable to fetch current Resource");
  }
}
function* updateResource(action) {
  //Update the post
  try {
    yield Axios.put(
      `/api/resources/${action.payload.currentId}`,
      action.payload
    );
  } catch (error) {
    alert("Unable to update Resource on server", error);
  }
}

function* resourceSaga() {
  yield takeEvery("FETCH_RESOURCES", fetchResources);
  yield takeEvery("FETCH_RESOURCES_DETAIL", fetchResourcesDetail);
  yield takeEvery("UPDATE_RESOURCE", updateResource);
  yield takeEvery("FETCH_CURRENT_RESOURCE", fetchCurrentResource);
  yield takeEvery("ADD_RESOURCE", addResources);
}

export default resourceSaga;
