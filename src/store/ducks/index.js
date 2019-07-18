import { combineReducers } from 'redux';

import favorites from './favorites';

/*Função responsável por agrupar todos os reducers da aplicação e entregar ao redux*/
export default combineReducers({
  favorites,
});
