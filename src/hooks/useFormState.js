import { useReducer } from "react";

export const useFormState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialState = {
    id: "",
    title: "",
    URL: "",
    overview: "",
    runTime: "",
    releaseDate: "",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_UPDATE:
        const {field, value} = action.payload;
  
        return {
          ...state,
          [field]: value,
        }
  
      case ACTION_RESET:
        return action.payload;
    
      default:
        break;
    }
  }


};