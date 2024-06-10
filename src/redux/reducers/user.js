import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  SPLITWISE_USER,
} from "../actions/types";

const initialState = {
  loading: false,
  userData: {
    id: "user_1",
    name: "Rahul",
    phone: "7776066770",
    balance: 0,
  },
};

const userReducer = (state = initialState, action) => {
  const { type, message } = action;
  const userData = JSON.parse(localStorage.getItem(SPLITWISE_USER));
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      let userDetails = { ...state.userData, ...userData };
      localStorage.setItem(SPLITWISE_USER, JSON.stringify(userDetails));
      return {
        ...state,
        loading: false,
        message: null,
        userData: userDetails,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        message,
        loading: false,
      };
    default:
      return state;
  }
};
export default userReducer;
