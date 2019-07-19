export const Types = {
  ADD_DETAILS: 'details/ADD_DETAILS',
  ADD_DETAILS_SUCCESS: 'details/ADD_DETAILS_SUCCESS'
};

const initialState = {
  detailsData: [0],
  loading: false,
  errorOnAdd: null,
};

export default function details(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_DETAILS_SUCCESS:
      return {
        detailsData: action.payload.details,
        loading: false,
        errorOnAdd: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  addDetailsRequest: id => ({
    type: Types.ADD_DETAILS,
    payload: {
      id,
    },
  }),

  addDetailsSuccess: details => ({
    type: Types.ADD_DETAILS_SUCCESS,
    payload: {
      details,
    },
  }),
};
