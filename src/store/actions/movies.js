// import axios from 'axios';
import { MOVIES_LOAD, MOVIES_SUCCESS } from '../action-types/';
import { FETCH_MOVIES_API_URL } from '../../const/';

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: MOVIES_LOAD });
    const response = await fetch(FETCH_MOVIES_API_URL);
    const data = await response.json();
    dispatch({
      type: MOVIES_SUCCESS,
      payload: data,
    });
  };
};

// export const fetchMovies = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: MOVIES_LOAD });
//       const response = await axios.get(FETCH_MOVIES_API_URL);
//       console.log('result', response);
//       const data = response.data.data;
//       console.log('result', data);
//       dispatch({
//         type: MOVIES_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({ type: MOVIES_FAIL, error });
//     }
//   };
// };
