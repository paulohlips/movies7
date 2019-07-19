export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE'
};

const initialState = {
  data: [0],
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: action.payload.respData,
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

export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName,
    },
  }),

  addFavoriteSuccess: respData => ({
    type: Types.ADD_SUCCESS,
    payload: {
      respData,
    },
  }),

  addFavoriteError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
