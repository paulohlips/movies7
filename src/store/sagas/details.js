import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as DetailsCreators } from '~/store/ducks/details';

const apiKey = '?api_key=a99afce8877efd6ce0a3ba0c49e79efa';

export function* addDetailsRequest(action) {
  try {
    const response = yield call(
      api.get,
      `/movie/${action.payload.id}${apiKey}`
    );
    yield put(DetailsCreators.addDetailsSuccess(response.data));
    // }
  } catch (err) {
    {
    }
  }
}
