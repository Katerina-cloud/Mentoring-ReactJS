import { MOVIES_SUCCESS } from '../action-types/';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.data,
      };
    default:
      return state;
  }
};
