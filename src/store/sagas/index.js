import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '~/store/ducks/favorites';
import { Types as DetailsTypes } from '~/store/ducks/details';
import { addFavoriteRequest } from './favorites';
import { addDetailsRequest } from './details';

export default function* rootSaga() {
  return yield all([
    takeLatest(FavoriteTypes.ADD_REQUEST, addFavoriteRequest),
    takeLatest(DetailsTypes.ADD_DETAILS, addDetailsRequest),
  ]);
}
