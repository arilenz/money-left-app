import * as types from "./actionTypes";
import {
  getDailyLimit,
  updateDailyLimit,
  getTodayRecord,
  decreaseTodayRecord
} from "../services/db";

export const changeRoute = name => ({
  type: types.CHANGE_ROURE,
  payload: { name }
});

export const requestDailyLimit = () => async dispatch => {
  dispatch({
    type: types.REQUEST_DAILY_LIMIT
  });

  const value = await getDailyLimit();

  dispatch({
    type: types.RECEIVE_DAILY_LIMIT,
    payload: { value }
  });

  return value;
};

export const requestUpdateDailyLimit = value => async dispatch => {
  dispatch({
    type: types.REQUEST_UPDATE_DAILY_LIMIT,
    payload: { value }
  });

  await updateDailyLimit(value);

  dispatch({
    type: types.RECEIVE_UPDATE_DAILY_LIMIT,
    payload: { value }
  });

  return true;
};

export const requestTodayRecord = () => async dispatch => {
  dispatch({
    type: types.REQUEST_TODAY_RECORD
  });

  const value = await getTodayRecord();

  dispatch({
    type: types.RECEIVE_TODAY_RECORD,
    payload: { value }
  });

  return value;
};

export const requestDecreaseTodayValue = value => async dispatch => {
  dispatch({
    type: types.REQUEST_DECREASE_TODAY_RECORD,
    payload: { value }
  });

  await decreaseTodayRecord(value);

  dispatch({
    type: types.RECEIVE_DECREASE_TODAY_RECORD,
    payload: { value }
  });

  return true;
};
