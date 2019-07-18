//Ducks junta no mesmo arquivo as actions e os reducers
//Toda função criada como action é uma ActionCreator

/*Primeiramente criamos todos os actions types:*/
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE'
};

/*Em seguida todos os reducers:*/
//Variável contendo o estado inicial
const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
  teste: 'Paulo'
};

/*reducer da TodoList
Por padrão o reducer é uma função que recebe o estado atual e action.
Ao ouvir uma action verifica se o type lhe diz respeito e em caso
positivo toma uma ação que é concatenar a action.text no estado do componente.
*/
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}

//Por ultimo criar os actions creators (funções que criam as actions):
export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName,
    },
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository,
    },
  }),

  addFavoriteError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
