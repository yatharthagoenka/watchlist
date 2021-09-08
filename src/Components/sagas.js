import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchData } from './api'
import {REQUEST_MOVIES,receiveMovies} from './actions';

function* moviesList(action) {
   try {
        const data = yield call(fetchData);
        yield put(receiveMovies(data));
   } catch (e) {
        console.log(e);
   }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_MOVIES, moviesList);
}
