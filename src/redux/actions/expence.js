import {
  ADD_Expences_REQUEST,
  ADD_Expences_SUCCESS,
  ADD_Expences_FAILED,
  GET_Expences_REQUEST,
  GET_Expences_SUCCESS,
  GET_Expences_FAILED,
  SPLITWISE_EXPENCE_DATA,
} from "./types";
import { v4 as uuidv4 } from "uuid";

export const addExpences = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_Expences_REQUEST,
  });
  try {
    payload.id = uuidv4();
    dispatch({
      type: ADD_Expences_SUCCESS,
      payload,
    });
  } catch (err) {
    dispatch({
      type: ADD_Expences_FAILED,
    });
  }
};

export const getExpencesummary = () => async (dispatch) => {
  dispatch({
    type: GET_Expences_REQUEST,
  });
  try {
    const expenceData = JSON.parse(localStorage.getItem(SPLITWISE_EXPENCE_DATA));
    dispatch({
      type: GET_Expences_SUCCESS,
      payload: expenceData
    });
  } catch (err) {
    dispatch({
      type: GET_Expences_FAILED,
    });
  }
};
