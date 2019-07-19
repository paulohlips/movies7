import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as FavoriteCreators } from '../ducks/favorites';

const apiKey = '?api_key=a99afce8877efd6ce0a3ba0c49e79efa';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/movie/popular/${apiKey}`);

    yield put(FavoriteCreators.addFavoriteSuccess(response.data.results));
  } catch (err) {
    yield put(FavoriteCreators.addFavoriteError('Request Error'));
  }
}
