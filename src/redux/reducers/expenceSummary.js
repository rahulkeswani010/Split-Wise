import {
  GET_Expences_REQUEST,
  GET_Expences_SUCCESS,
  GET_Expences_FAILED,
} from "../actions/types";

const initialState = {
  loading: false,
  summary: {},
};

const expenceReducer = (state = initialState, action) => {
  const { type, payload, message } = action;
  switch (type) {
    case GET_Expences_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_Expences_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Summary loaded Successfully",
        summary: payload,
      };
    case GET_Expences_FAILED:
      return {
        ...state,
        message,
        loading: false,
      };
    default:
      return state;
  }
};

export default expenceReducer;
