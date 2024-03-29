import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";


function* watchFetchDronePosition(action) {
  const { error, data } = yield call(API.findDronePosition);
  if (error) {
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  const curr=data.data.pop();
  yield put({ type: actions.DRONE_DATA_RECEIVED, curr});
}

function* watchDroneDataReceived(action) {
  const { latitude, longitude } = action.curr;
  const { error, data } = yield call(
    API.findLocationByLatLng,
    latitude,
    longitude
  );
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  const location = data[0] ? data[0].woeid : false;
  if (!location) {
    yield put({ type: actions.API_ERROR });
    yield cancel();
    return;
  }
  yield put({ type: actions.WEATHER_ID_RECEIVED, id: location });
}

function* watchAppLoad() {
  yield all([
    takeEvery(actions.FETCH_DRONE, watchFetchDronePosition),
    takeEvery(actions.DRONE_DATA_RECEIVED, watchDroneDataReceived),
  ]);
}

export default [watchAppLoad];