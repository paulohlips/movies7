import { combineReducers } from 'redux';

import favorites from '~/store/ducks/favorites';
import details from '~/store/ducks/details';

export default combineReducers({
  favorites,
  details,
});
